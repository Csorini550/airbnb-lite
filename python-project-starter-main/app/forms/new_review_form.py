from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Review

class NewReviewForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    reservation_id = IntegerField('reservation_id', validators=[DataRequired()])
    venue_id = IntegerField('venue_id', validators=[DataRequired()])
    rating = FloatField('rating', validators=[DataRequired()])
    comment = TextAreaField('comment')
