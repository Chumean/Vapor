from flask import Blueprint, jsonify, session, request, abort, redirect, url_for
from app.models import Game, db
from app.forms.game_form import GameForm
from flask_login import login_required, current_user

game_routes = Blueprint('games', __name__,)

@game_routes.route('/')
def get_all_games():
    games = Game.query.all()
    game_list = []
    for game in games:
        game_dict = game.to_dict()
        game_list.append(game_dict)
    return jsonify({'games': game_dict})
