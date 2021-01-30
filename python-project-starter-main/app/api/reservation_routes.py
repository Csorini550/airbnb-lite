from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Reservation, db
from app.forms import NewReservationForm

reservation_routes = Blueprint('reservations', __name__)


# @reservation_routes.route('/')
# # @login_required
# def reservations():
#     reservations = Reservation.query.all()
#     return {
#         reservation.id: reservation.to_dict() for reservation in reservations
#     }


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

# All reservation for specific venue - No login required
@reservation_routes.route('/venues/<int:venueId>')
def venueReservation(venueId):
    reservations = Reservation.query.filter_by(venue_id=venueId).all()
    return {
        reservation.id: reservation.to_dict() for reservation in reservations
    }


# All reservation for specific user
@reservation_routes.route('/users/<int:userId>')
# @login_required
def userReservation(userId):
    reservations = Reservation.query.filter_by(user_id=userId).all()
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



# CREATE A NEW RESERVATION - WILL NEED TO CHANGE DEPENDING ON FRONTEND -- DATE NEEDS TO BE IN Y-M-D H:MIN:SEC FORMAT
@reservation_routes.route('/', methods=['POST'])
# @login_required
def new_reservation():
    form = NewReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # demo reservation if form doesn't validate. Hard coded due to time
    demoReservation = Reservation(
            user_id=1,
            venue_id=2,
            start_date='2021-02-01 12:00:00',
            end_date='2021-02-01 16:00:00',
            price=100.00,
            total=110.00,
            guest_count=10,
        )
    if form.validate_on_submit():
        newReservation = Reservation(
            user_id=form.data['user_id'],
            venue_id=form.data['venue_id'],
            start_date=form.data['start_date'],
            end_date=form.data['end_date'],
            price=form.data['price'],
            total=form.data['total'],
            guest_count=form.data['guest_count'],
        )
        db.session.add(newReservation)
        db.session.commit()
        return newReservation.to_dict()
    # return {'errors': validation_errors_to_error_messages(form.errors)}
    else:
        db.session.add(demoReservation)
        db.session.commit()
        return demoReservation.to_dict()
