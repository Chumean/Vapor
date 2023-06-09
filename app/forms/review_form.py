from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField("Review", validators=[DataRequired()])
    recommended = StringField("Recommended", validators=[DataRequired()])
    user_id = IntegerField("User_id", validators=[DataRequired()])
    game_id = IntegerField("Game_id", validators=[DataRequired()])
    submit = SubmitField("Submit")
