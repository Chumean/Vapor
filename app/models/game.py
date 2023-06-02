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
    release_date = db.Column(db.Date, nullable=False)
    description = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    tags = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)

    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    user = db.relationship("User", backref='games')

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
            'reviews': [review.to_dict() for review in self.review]
        }
