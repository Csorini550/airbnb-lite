from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Reservation

reservation_routes = Blueprint('reservations', __name__)


@reservation_routes.route('/')
# @login_required
def reservations():
    reservations = Reservation.query.all()
    return {
        reservation.id: reservation.to_dict() for reservation in reservations
    }
    # return {
    #     reservation.id: {
    #         "guest count": reservation.guest_count
    #     } for reservation in reservations
    # }


@reservation_routes.route('/<int:id>')
# @login_required
def reservation(id):
    reservation = Reservation.query.get(id)
    return reservation.to_dict()
