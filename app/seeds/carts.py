from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from app.models import Cart_Item

def seed_cart_items():
    bobbieCart = Cart_Item(game_id=1, user_id=3, quantity=1)
    demoCart = Cart_Item(game_id=3, user_id=1, quantity=1)
    marnieCart = Cart_Item(game_id=5, user_id=2, quantity=1)

    db.session.add(demoCart)
    db.session.add(marnieCart)
    db.session.add(bobbieCart)
    db.session.commit()


def undo_cart_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cart_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cart_items"))

    db.session.commit()
