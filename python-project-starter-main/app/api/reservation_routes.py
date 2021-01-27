from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Reservation, db

reservation_routes = Blueprint('reservations', __name__)


# @reservation_routes.route('/')
# # @login_required
# def reservations():
#     reservations = Reservation.query.all()
#     return {
#         reservation.id: reservation.to_dict() for reservation in reservations
#     }

# All reservation for specific venue - No login required
@reservation_routes.route('/venues/<int:venueId>')
def venueReservation(venueId):
    reservations = Reservation.query.filter_by(venue_id=venueId)
    return {
        reservation.id: reservation.to_dict() for reservation in reservations
    }


# All reservation for specific user
@reservation_routes.route('/users/<int:userId>')
# @login_required
def userReservation(userId):
    reservations = Reservation.query.filter_by(user_id=userId)
    return {
        reservation.id: reservation.to_dict() for reservation in reservations
    }

# DELETE A RESERVATION -- NOT SURE WHAT TO RETURN, WILL PROBABLY NEED TO CHANGE
@reservation_routes.route('/delete/<int:reservationId>')
# @login_required
def delete_reservation(reservationId):
    reservationToDelete = Reservation.query.get(reservationId)
    if reservationToDelete:
        db.session.delete(reservationToDelete)
        db.session.commit()
        return '<h1>Deleted</h1>'
    return '<h1>No matching reservation</h1>'

