from flask import Blueprint, jsonify
from flask_login import login_required
from app.forms import NewReviewForm
from app.models import Review
from app.models import db

review_routes = Blueprint('reviews', __name__)

# GET ALL REVIEWS FOR A SPECIFIC VENUE


@review_routes.route('/<int:id>')
def all_reviews(id):
    reviews = Review.query.filter_by(venue_id=id)
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


<< << << < HEAD
== == == =
return newReview.to_dict()
>>>>>> > main
return {'errors': validation_errors_to_error_messages(form.errors)}
