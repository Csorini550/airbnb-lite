from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Review

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
# @login_required
def all_reviews():
    reviews = Review.query.all()
    return {review.id: review.to_dict() for review in reviews}


# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()