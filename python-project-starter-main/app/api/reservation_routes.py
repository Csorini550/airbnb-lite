from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Reservation

reservation_routes = Blueprint('reservations', __name__)


# @reservation_routes.route('/')
# # @login_required
# def reservations():
#     reservations = Reservation.query.all()
#     return {
#         reservation.id: reservation.to_dict() for reservation in reservations
#     }

# All reservation for specific venue
@reservation_routes.route('/venues/<int:id>')
# @login_required
def venueReservation(id):
    reservations = Reservation.query.filter_by(venue_id=id)
    return {
        reservation.id: reservation.to_dict() for reservation in reservations
    }


# All reservation for specific venue
@reservation_routes.route('/users/<int:id>')
# @login_required
def userReservation(id):
    reservations = Reservation.query.filter_by(user_id=id)
    return {
        reservation.id: reservation.to_dict() for reservation in reservations
    }
