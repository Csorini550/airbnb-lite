from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Venue, Media
from app.models import db
from app.forms import NewVenueForm


venue_routes = Blueprint('venues', __name__)

# GET ALL VENUES


@venue_routes.route('/')
def all_venues():
    venues = Venue.query.all()
    return {venue.id: venue.to_dict() for venue in venues}


# GET ONE VENUE BY ID
@venue_routes.route('/<int:venueId>')
def venue(venueId):
    venue = Venue.query.get(venueId)
    if venue:
        return {
            venue.id: venue.to_dict()
        }
    return '<h1>Could not find venue</h1>'


@venue_routes.route('/media', methods=["POST"])
def media():
    data = request.get_json()
    new_media = Media(
        venue_id=data['venue_id'],
        url=data['url'],
        review_id=data['review_id'],
    )

    return new_media.to_dict()


@venue_routes.route('/', methods=['POST'])
# @login_required
def new_venue():
    form = NewVenueForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    newVenue = Venue(
        # owner_id=form.data['owner_id'],
        name=form.data['name'],
        price=form.data['price'],
        type=form.data['type'],
        room_type=form.data['room_type'],
        total_occupancy=form.data['total_occupancy'],
        twentyone_plus=form.data['twentyone_plus'],
        kid_friendly=form.data['kid_friendly'],
        summary=form.data['summary'],
        street_address=form.data['street_address'],
        city=form.data['city'],
        state=form.data['state'],
        has_bar=form.data['has_bar'],
        has_kitchen=form.data['has_kitchen'],
        has_rooftop=form.data['has_rooftop'],
        has_heated_outdoor_seating=form.data['has_heated_outdoor_seating'],
        has_liquor=form.data['has_liquor'],
        has_beer=form.data['has_beer'],
        has_byob=form.data['has_byob'],
        has_outdoor_seating=form.data['has_outdoor_seating'],
        created_at="2020-01-20",
        update_at="2020-01-20"

    )
    db.session.add(newVenue)
    db.session.commit()
    print(form.data)

    return newVenue.to_dict()

    # return {'errors': validation_errors_to_error_messages(form.errors)}
