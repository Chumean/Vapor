from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, SubmitField, TextAreaField, DateField
from wtforms.validators import DataRequired

class GameForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    genre = StringField('Genre', validators=[DataRequired()])
    developer = StringField('Developer', validators=[DataRequired()])
    publisher = StringField('Publisher', validators=[DataRequired()])
    franchise = StringField('Franchise', validators=[DataRequired()])
    release_date = DateField('Release_date', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    owner_id = IntegerField("Owner_id")
    price = FloatField('Price', validators=[DataRequired()])
    tags = StringField("Tags", validators=[DataRequired()])
    image = StringField("Image", validators=[DataRequired()])
