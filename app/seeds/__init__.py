from flask.cli import AppGroup
from .users import seed_users, undo_users
from .carts import seed_cart_items, undo_cart_items
from .games import seed_games, undo_games
from .reviews import seed_reviews, undo_reviews
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_cart_items()
        undo_reviews()
        undo_games()
        undo_users()
    seed_users()
    seed_games()
    seed_reviews()
    seed_cart_items()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_cart_items()
    undo_reviews()
    undo_games()
    undo_users()
    # Add other undo functions here
