from flask import Blueprint, jsonify
from app.models import Venue


results_routes = Blueprint('results', __name__)


@results_routes.route('/')
def venue_results():
    venues = Venue.query.all()
    print(venues)
    return {"venues": [venue.name for venue in venues]}
