from flask import Blueprint, jsonify
from app.models import Venue


results_routes = Blueprint('results', __name__)

# TODO: add kids and adults dropdown
# IF kids, then don't return any 21+ venues
# search goes through with location, date, time, guests
# return all venues that match those


# TODO: other filters:
#

@results_routes.route('/')
def venue_results():
    venues = Venue.query.all()
    print(venues)
    return {"venues": [venue.name for venue in venues]}
