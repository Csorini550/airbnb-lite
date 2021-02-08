from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, TextAreaField, DateTimeField, DateField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Food_or_drink

class NewFoodOrDrinkForm(FlaskForm):
    menue_id =IntegerField('menue_id')
    name =StringField('name')
    price =FloatField('price')
    description =StringField('description')

