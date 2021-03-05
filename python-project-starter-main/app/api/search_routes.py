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

# FIND VENUE BY ROOM TYPE


@results_routes.route('/venue/<searchTerm>')
def venues_by_room_type(searchTerm):
    venues_room_type = Venue.query.filter(
        Venue.room_type.ilike(f'{searchTerm}%')).all()
    venues_state = Venue.query.filter(
        Venue.state.ilike(f'{searchTerm}%')).all()
    venues_type = Venue.query.filter(Venue.type.ilike(f'{searchTerm}%')).all()
    if venues_room_type:
        return {venue.id: venue.to_dict() for venue in venues_room_type}
    else:
        return '<h1>None</>'

# SEARCH BY LOCATION


@results_routes.route('/location/<searchTerm>')
def venues_by_city_or_state(searchTerm):
    venues_state = Venue.query.filter(
        Venue.state.ilike(f'{searchTerm}%')).all()
    venues_type = Venue.query.filter(Venue.type.ilike(f'{searchTerm}%')).all()
    if venues_state:
        return {venue.id: venue.to_dict() for venue in venues_state}
    elif venues_type:
        return {venue.id: venue.to_dict() for venue in venues_type}
    else:
        return '<h1>None</>'

# SEARCH FOR ONLINE EXPERIENCES BY TYPE


@results_routes.route('/online/<searchTerm>')
def online_experience_by_type(searchTerm):
    online_experience_type = Venue.query.filter(
        Venue.room_type.ilike(f'{searchTerm}%'), Venue.type.ilike('Online')).all()
    if online_experience_type:
        return {venue.id: venue.to_dict() for venue in online_experience_type}
    else:
        return '<h1>None</>'


@results_routes.route('/', methods=['POST'])
def search_query():
    data = request.get_json()
    location = data['location']
    date = data['date']
    time = data['time']
    guest_count = data['guest_count']

    venues_city = Venue.query.filter(Venue.city.ilike(location)).all()
    venues_state = Venue.query.filter(Venue.state.ilike(location)).all()
    if venues_city:
        return {"venues": venue.to_dict() for venue in venues_city}
    elif venues_state:
        return {"venues": venue.to_dict() for venue in venues_state}
    return '<h1>None</h1>'
