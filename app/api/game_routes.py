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
    return jsonify({'games': game_dict})

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
