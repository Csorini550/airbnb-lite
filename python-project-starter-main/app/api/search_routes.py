from flask import Blueprint, jsonify, request
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



@results_routes.route('/', methods=['POST'])
def search_query():
    data = request.get_json()
    location = data['location']
    date = data['date']
    time = data['time']
    guest_count = data['guest_count']

    venues_city = Venue.query.filter_by(city=location).all()
    venues_state = Venue.query.filter_by(state=location).all()
    if venues_city:
        return {"venues": venue.to_dict() for venue in venues_city}
    elif venues_state:
        return {"venues": venue.to_dict() for venue in venues_state}
    return '<h1>hi</h1>'

