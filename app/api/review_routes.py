from flask import Blueprint, jsonify, session
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_routes = Blueprint('reviews', __name__)

# DELETE REVIEW
@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):

    user_id = current_user.id

    review = Review.query.get(id)

    if not review or review.user_id != user_id:
        return jsonify({'error':'Review not found or unauthorized'}, 404)

    db.session.delete(review)
    db.session.commit()

    return review.to_dict()

# EDIT REVIEW
@review_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):

    user_id = current_user.id

    review = Review.query.get(id)

    if not review or review.user_id != user_id:
        return jsonify({'error':'Review not found or unauthorized'}, 404)

    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = form.review.data
        recommended = form.recommended.data
        user_id = form.user_id.data
        game_id = form.game_id.data

        db.session.commit()

        return review.to_dict()

    return "NO EDIT"
