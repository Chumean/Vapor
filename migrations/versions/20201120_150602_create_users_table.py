"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    op.create_table('games',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=False),
    sa.Column('genre', sa.String(length=50), nullable=False),
    sa.Column('developer', sa.String(length=50), nullable=False),
    sa.Column('publisher', sa.String(length=50), nullable=False),
    sa.Column('franchise', sa.String(length=50), nullable=False),
    sa.Column('release_date', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=50), nullable=False),
    sa.Column('tags', sa.String(), nullable=False),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    # sa.Column('user_id', sa.Integer(), nullable=False),
    # sa.ForeignKeyConstraint(['user_id'], ['users.id']),
    sa.PrimaryKeyConstraint('id'),
    )

    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('recommended', sa.Boolean(), nullable=False),
    sa.Column('review', sa.String(length=2000), nullable=True),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )


    # op.create_table('library',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('user_id', sa.Integer(), nullable=False),
    # sa.Column('game_id', sa.Integer(), nullable=False),
    # sa.Column('favorites', sa.Boolean(), nullable=False),
    # sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    # sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    # sa.PrimaryKeyConstraint('id')
    # )

    op.create_table('cart_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('cart_id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cart_id'], ['cart.id'], ),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###qqqqqqqqq


def downgrade():
    op.drop_table('cart_items')
    # op.drop_table('library')
    op.drop_table('reviews')
    op.drop_table('games')
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
