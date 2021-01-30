from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField, SelectField, BooleanField, DateTimeField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Venue

class NewVenueForm(FlaskForm):
    type = SelectField('type', choices=[('Venue'), ('Online Experience'), ('Outdoor Experience')])
    room_type = SelectField('room_type', choices=[('Tiki Bar'), ('Sports Bar'), ('Restaurant'), ('Kid Friendly'), ('Venue with a view')])
    total_occupancy = IntegerField('total_occupancy')
    summary = TextAreaField('summary')
    has_bar = BooleanField('has_bar')
    has_kitchen = BooleanField('has_kitchen')
    has_rooftop = BooleanField('has_rooftop')
    has_heated_outdoor_seating = BooleanField('has_heated_outdoor_seating')
    has_liquor = BooleanField('has_liquor')
    price = FloatField('price')
    # owner_id = IntegerField('owner_id')
    created_at = DateTimeField('created_at')
    update_at = DateTimeField('update_at')
    has_beer = BooleanField('has_beer')
    has_byob = BooleanField('has_byob')
    has_outdoor_seating = BooleanField('has_outdoor_seating')
    name = StringField('name')
    twentyone_plus = BooleanField('twentyone_plus')
    kid_friendly = BooleanField('kid_friendly')
    links = StringField('links')
    street_address = StringField('street_address')
    city = StringField('city')
    state = StringField('state')















