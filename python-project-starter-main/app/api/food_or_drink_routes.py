from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import NewFoodOrDrinkForm
from app.models import Food_or_drink
from app.models import db



food_or_drink_routes = Blueprint('food_or_drink')


@food_or_drink_routes.route("<int:MenueId>")
def food