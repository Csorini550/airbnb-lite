from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Venue
from app.models import db
from app.forms import NewVenueForm


venue_routes = Blueprint('venues', __name__)

# GET ALL VENUES 
@venue_routes.route('/')
def all_venues():
    venues = Venue.query.all()
    return {venue.id : venue.to_dict() for venue in venues}


# GET ONE VENUE BY ID
@venue_routes.route('/<int:venueId>')
def venue(venueId):
    venue = Venue.query.get(venueId)
    if venue:
        return {
            venue.id: venue.to_dict()
        }
    return '<h1>Could not find venue</h1>'



@venue_routes.route('/', methods=['POST'])
# @login_required
def new_venue():
    form = NewVenueForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    newVenue = Venue(
        type=form.data['type'],
        room_type=form.data['room_type'],
        total_occupancy=form.data['total_occupancy'],
        summary=form.data['summary'],
        has_bar=form.data['has_bar'],
        has_kitchen=form.data['has_kitchen'],
        has_rooftop=form.data['has_rooftop'],
        has_heated_outdoor_seating=form.data['has_heated_outdoor_seating'],
        has_liquor=form.data['has_liquor'],
        price=form.data['price'],
        owner_id=form.data['owner_id'],
        created_at=form.data['created_at'],
        update_at=form.data['update_at'],
        has_beer=form.data['has_beer'],
        has_byob=form.data['has_byob'],
        has_outdoor_seating=form.data['has_outdoor_seating'],
        name=form.data['name'],
        twentyone_plus=form.data['twentyone_plus'],
        kid_friendly=form.data['kid_friendly'],
        links=form.data['links'],
        street_address=form.data['street_address'],
        city=form.data['city'],
        state=form.data['state'],
    )
    db.session.add(newVenue)
    db.session.commit()

    return newVenue.to_dict()

    # return {'errors': validation_errors_to_error_messages(form.errors)}
