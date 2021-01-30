from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField, DateTimeField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Media


class NewMediaForm(FlaskForm):
    venue_id = IntegerField('venue_id')
    review_id = IntegerField('review_id')
    url = StringField("url")

