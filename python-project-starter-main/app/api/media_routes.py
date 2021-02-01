from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import NewMediaForm
from app.models import Media
from app.models import db


media_routes = Blueprint('media', __name__)


@venue_routes.route('/<int:venueId>')
def media(venueId):
    media = Media.query.get(venueId)
    if media:
        return {
            media.id: media.to_dict()
        }
    print(media)
    return '<h1>Could not find picture</h1>'

#help
    #Also need a route to search all media with the key being userId
