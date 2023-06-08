from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.types import Integer, String, Boolean

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(250))
    recommended = db.Column(db.Boolean)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("games.id")))

    user = db.relationship("User", back_populates="review")
    game = db.relationship("Game", back_populates='review')

    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'recommended': self.recommended,
            'user_id': self.user_id,
            'game_id': self.game_id,
            'username': self.user.username
        }
