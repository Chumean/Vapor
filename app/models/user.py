from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .cart_item import Cart_Item

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(), nullable=False, unique=True)
    hashed_password = db.Column(db.String(), nullable=False)

    game = db.relationship("Game", secondary=add_prefix_for_prod("cart_items"), back_populates="owner", cascade="all")
    cart = db.relationship("Cart_Item", back_populates="user", cascade="all, delete-orphan")
    review = db.relationship("Review", back_populates="user", cascade="all, delete-orphan" )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
