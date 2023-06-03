from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from app.forms.cart_form import CartForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('<int:id>/cart')
@login_required
def cart(id):

    cartRel_query = Cart_Item.query.filter(Cart_Item.user_id == id)

    cartRels = cartRel_query.all()
  
    cartGames = []
    if (len(cartRels) > 0):
        for rel in cartRels:
            res = rel.to_dict()
            cartGames.append(res)

    return cartGames


@user_routes.route('<int:userId>/cart/<int:gameId>', methods=['POST'])
def addToCart(userId, gameId):

    form = CartForm()

    cartRel = Cart_Item(game_id=gameId, user_id=userId, quantity=form.quantity.data)

    db.session.add(cartRel)
    db.session.commit()

    return cartRel.to_dict()


@user_routes.route('<int:userId>/cart/<int:gameId>', methods=['PUT'])
def updateCart(userId, gameId):

    form = CartForm()

    cartRel_query = Cart_Item.query.filter(Cart_Item.user_id == userId, Cart_Item.game_id == gameId)
    cartRel = cartRel_query.one()

    cartRel.quantity = form.quantity.data

    db.session.commit()

    return cartRel.to_dict()

@user_routes.route('<int:userId>/cart/<int:gameId>', methods=['DELETE'])
def deleteFromCart(userId, gameId):

    cartRel_query = Cart_Item.query.filter(Cart_Item.user_id == userId, Cart_Item.game_id == gameId).one()


    test1 = cartRel_query.to_dict()
    db.session.delete(cartRel_query)

    db.session.commit()

    return cartRel_query.to_dict()
