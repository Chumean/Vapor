from .db import db, environment, SCHEMA, add_prefix_for_prod

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.types import Integer, String, Text, Float, Date

class Game(db.Model):
    __tablename__ = 'games'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    developer = db.Column(db.String, nullable=False)
    publisher = db.Column(db.String, nullable=False)
    franchise = db.Column(db.String, nullable=False)
    release_date = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    tags = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=True)

    owner = db.relationship("User", secondary=add_prefix_for_prod("cart_items"), back_populates="game")
    cart = db.relationship("Cart_Item", back_populates="game", cascade="all, delete-orphan")
    review = db.relationship("Review", back_populates="game", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'genre': self.genre,
            'developer': self.developer,
            'publisher': self.publisher,
            'franchise': self.franchise,
            'release_date': self.release_date,
            'description': self.description,
            'price': self.price,
            'tags': self.tags,
            'image': self.image,
            'reviews': [review.to_dict() for review in self.review],
            'owner_id': self.owner_id
        }
