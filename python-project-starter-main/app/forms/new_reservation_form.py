from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField, DateTimeField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Review

class NewReservationForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    venue_id = IntegerField('venue_id', validators=[DataRequired()])
    start_date = DateTimeField('start_date', validators=[DataRequired()])
    end_date = DateTimeField('end_date', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    total = FloatField('total', validators=[DataRequired()])
    guest_count = IntegerField('guest_count')


