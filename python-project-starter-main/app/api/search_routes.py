from flask import Blueprint, jsonify
from app.models import Venue


results_routes = Blueprint('results', __name__)

# TODO: add kids and adults dropdown
# IF kids, then don't return any 21+ venues
# search goes through with location, date, time, guests
# return all venues that match those


# TODO: other filters:
#
# GETS ALL VENUES
@results_routes.route('/')
def venue_results():
    venues = Venue.query.all()
    return {"venues": venue.to_dict() for venue in venues}

# FIND VENUE BY CITY OR STATE
@results_routes.route('/<searchTerm>')
def venues_by_city_or_state(searchTerm):
    venues_city = Venue.query.filter_by(city=searchTerm).all()
    venues_state = Venue.query.filter_by(state=searchTerm).all()
    if venues_city:
        return {"venues": venue.to_dict() for venue in venues_city}
    elif venues_state:
        return {"venues": venue.to_dict() for venue in venues_state}



