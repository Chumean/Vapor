from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User.query.filter_by(username="Demo").first()
    if demo is None:
        demo = User(
        username='Demo', email='demo@aa.io', password='password')
        db.session.add(demo)

    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password')
    hater = User(
        username='Hater', email='hater@aa.io', password='password')
    troll = User(
        username='Troll', email='troll@aa.io', password='password')
    clown = User(
        username='Clown', email='clown@aa.io', password='password')


    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(hater)
    db.session.add(troll)
    db.session.add(clown)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
