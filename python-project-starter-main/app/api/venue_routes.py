from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Venue
from app.models import db


venue_routes = Blueprint('venues', __name__)

# GET ALL VENUES 
@venue_routes.route('/')
def all_venues():
    venues = Venue.query.all()
    return {"venues": venue.to_dict() for venue in venues}


# GET ONE VENUE BY ID
@venue_routes.route('/<int:venueId>')
def venue(venueId):
    venue = Venue.query.get(venueId)
    if venue:
        return {
            "venue": venue.to_dict()
        }
    return '<h1>Could not find venue</h1>'