from flask import Blueprint, jsonify, session, request, abort, redirect, url_for
from app.models import Game, db, Review
from app.forms.game_form import GameForm
from app.forms.review_form import ReviewForm
from flask_login import login_required, current_user

game_routes = Blueprint('games', __name__,)

# GET ALL GAMES
@game_routes.route('/')
def get_all_games():
    games = Game.query.all()
    game_list = []
    for game in games:
        game_dict = game.to_dict()
        game_list.append(game_dict)
    return jsonify({'games': game_list})

@game_routes.route('/category')
def get_games_by_category(category):
    games = Game.query.filter(Game.genre == category)
    game_list = []
    for game in games:
        game_dict = game.to_dict()
        game_list.append(game_dict)
    return jsonify({'games': game_list})

# GET GAME DETAILS
@game_routes.route('/<int:id>')
def get_game_details(id):
    game = Game.query.get(id)
    if not game:
        return jsonify({'error': 'Game not found'}), 404
    return jsonify(game.to_dict())

# GET REVIEWS
@game_routes.route('/<int:id>/reviews', methods=["GET"])
def get_reviews(id):
    reviews = Review.query.filter_by(game_id=id).all()
    return jsonify([review.to_dict() for review in reviews])

# ADD REVIEW
@game_routes.route('/<int:id>/reviews', methods=["POST"])
@login_required
def add_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    review = form.review.data
    recommended = form.recommended.data
    user_id = form.user_id.data
    game_id = id

    new_review = Review(
        review=review,
        recommended=recommended,
        user_id=user_id,
        game_id=game_id
    )

    db.session.add(new_review)
    db.session.commit()

    return new_review.to_dict();

@game_routes.route('<int:gameId>/reviews/<int:reviewId>', methods=["PUT"])
@login_required
def edit_review(gameId, reviewId):

    review = Review.query.filter_by(game_id=gameId, id=reviewId).first()

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    review = Review.query.get(reviewId)

    if not review:
        return jsonify({'error': 'Review not found'}), 404


    if form.validate_on_submit():
        review.review = form.review.data
        review.recommended = form.recommended.data
        review.user_id = form.user_id.data
        review.game_id = form.game_id.data
        db.session.commit()

        return jsonify(review.to_dict())

    return jsonify({'error': 'Invalid form data'}, 400)
