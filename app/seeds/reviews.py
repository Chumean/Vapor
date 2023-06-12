from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    r1 = Review(
        review='Guys I think I downloaded the wrong website.',
        recommended="No",
        user_id=1,
        game_id=1
    )

    r2 = Review(
    review='This game is absolutely fantastic! The story and characters are captivating, and the gameplay is top-notch.',
    recommended="Yes",
    user_id=2,
    game_id=2
    )

    r3 = Review(
    review="I'm having a blast playing this game. The graphics and world design are stunning, and the combat is intense.",
    recommended="Yes",
    user_id=3,
    game_id=3
    )

    r4 = Review(
    review="Unfortunately, this game didn't live up to my expectations. The gameplay felt repetitive and the story was lackluster.",
    recommended="No",
    user_id=4,
    game_id=4
    )

    r5 = Review(
    review="I highly recommend this game to any RPG fan. The world is immersive and the quests are engaging. It's a must-play.",
    recommended="Yes",
    user_id=5,
    game_id=5
    )

    r6 = Review(
    review="I'm disappointed with this game. The controls are clunky and the graphics are outdated. I wouldn't recommend it.",
    recommended="Yes",
    user_id=6,
    game_id=6
    )

    r7 = Review(
    review="I'm absolutely addicted to this game. The gameplay is smooth and the multiplayer experience is fantastic.",
    recommended="Yes",
    user_id=1,
    game_id=7
    )

    r8 = Review(
    review='This game has an incredible storyline that kept me engaged from start to finish. Highly recommended!',
    recommended="Yes",
    user_id=2,
    game_id=8
    )

    r9 = Review(
    review="I'm impressed with the graphics and attention to detail in this game. It's a visual masterpiece.",
    recommended="Yes",
    user_id=3,
    game_id=9
    )

    r10 = Review(
    review='I encountered numerous bugs and glitches while playing this game. It seriously affected my experience.',
    recommended="No",
    user_id=4,
    game_id=10
    )

    r11 = Review(
    review="The combat mechanics in this game are exceptional. It's a challenging and rewarding experience.",
    recommended="Yes",
    user_id=5,
    game_id=11
    )

    r12 = Review(
    review='I found the gameplay to be repetitive and the story lacking depth. Not recommended.',
    recommended="Yes",
    user_id=6,
    game_id=1
    )

    r13 = Review(
        review='Can someone helpe me out? I bought the game but in my library there is no play button',
        recommended="Yes",
        user_id=2,
        game_id=1
    )

    db.session.add(r1)
    db.session.add(r2)
    db.session.add(r3)
    db.session.add(r4)
    db.session.add(r5)
    db.session.add(r6)
    db.session.add(r7)
    db.session.add(r8)
    db.session.add(r9)
    db.session.add(r10)
    db.session.add(r11)
    db.session.add(r12)
    db.session.add(r13)
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
