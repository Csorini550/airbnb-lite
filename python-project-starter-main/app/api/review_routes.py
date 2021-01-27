from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import NewReviewForm
from app.models import Review
from app.models import db

review_routes = Blueprint('reviews', __name__)

# GET ALL REVIEWS FOR A SPECIFIC VENUE -- DOES NOT NEED TO BE LOGGED IN
@review_routes.route('/<int:venueId>')
def all_reviews_for_venue(venueId):
    reviews = Review.query.filter_by(venue_id=venueId).all()
    return {review.id: review.to_dict() for review in reviews}

# CREATE A NEW REVIEW - WILL NEED TO CHANGE DEPENDING ON FRONTEND


@review_routes.route('/', methods=['POST'])
# @login_required
def new_review():
    form = NewReviewForm()  # not sure if class will be called this
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        newReview = Review(
            user_id=form.data['user_id'],
            reservation_id=form.data['reservation_id'],
            venue_id=form.data['venue_id'],
            rating=form.data['rating'],
            comment=form.data['comment'],
        )
        db.session.add(newReview)
        db.session.commit()

        return newReview.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}


# DELETE A REVIEW -- NOT SURE WHAT TO RETURN, WILL PROBABLY NEED TO CHANGE
@review_routes.route('/delete/<int:reviewId>')
# @login_required
def delete_review(reviewId):
    reviewToDelete = Review.query.get(reviewId)
    if reviewToDelete:
        db.session.delete(reviewToDelete)
        db.session.commit()
        return '<h1>Deleted</>'
    return '<h1>No matching review</h1>'


# GET ALL REVIEWS THAT A USER CREATED
@review_routes.route('/user/<int:userId>')
# @login_required
def all_reviews_for_user(userId):
    reviews = Review.query.filter_by(user_id=userId).all()
    return {review.id: review.to_dict() for review in reviews}
