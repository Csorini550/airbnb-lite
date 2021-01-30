from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String)
    description = db.Column(db.Text)
    profile_image = db.Column(db.String)
    business_owner = db.Column(db.Boolean)

    reservations = db.relationship("Reservation", back_populates="user")
    # venue = db.relationship("Venue", back_populates="user")
    favorites = db.relationship("Favorite", back_populates="user")
    reviews = db.relationship("Review", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "description": self.description,
            "profile_image": self.profile_image,
            "business_owner": self.business_owner
        }


class Venue(db.Model):
    __tablename__ = 'venues'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)
    room_type = db.Column(db.String, nullable=False)
    total_occupancy = db.Column(db.Integer, nullable=False)
    summary = db.Column(db.String, nullable=False)
    has_bar = db.Column(db.Boolean, nullable=False)
    has_kitchen = db.Column(db.Boolean, nullable=False)
    has_rooftop = db.Column(db.Boolean, nullable=False)
    has_heated_outdoor_seating = db.Column(db.Boolean, nullable=False)
    has_liquor = db.Column(db.Boolean, nullable=False)
    price = db.Column(db.Float, nullable=False)
    owner_id = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    update_at = db.Column(db.DateTime, nullable=False)
    has_beer = db.Column(db.Boolean, nullable=False)
    has_byob = db.Column(db.Boolean, nullable=False)
    has_outdoor_seating = db.Column(db.Boolean, nullable=False)
    name = db.Column(db.String, nullable=False)
    twentyone_plus = db.Column(db.Boolean, nullable=False)
    kid_friendly = db.Column(db.Boolean, nullable=False)
    links = db.Column(db.String)
    street_address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)

    # user = db.relationship("User", back_populates="venue")
    reservation = db.relationship("Review", back_populates="venue")
    media = db.relationship("Media", back_populates="venue")
    favorite = db.relationship("Favorite", back_populates="venue")
    review = db.relationship("Review", back_populates="venue")

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "room_type": self.room_type,
            "total_occupancy": self.total_occupancy,
            "summary": self.summary,
            "has_bar": self.has_bar,
            "has_kitchen": self.has_kitchen,
            "has_rooftop": self.has_rooftop,
            "has_heated_outdoor_seating": self.has_heated_outdoor_seating,
            "has_liquor": self.has_liquor,
            "price": self.price,
            "owner_id": self.owner_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
            "has_beer": self.has_beer,
            "has_byob": self.has_byob,
            "has_outdoor_seating": self.has_outdoor_seating,
            "name": self.name,
            "twentyone_plus": self.twentyone_plus,
            "kid_friendly": self.kid_friendly,
            "links": self.links,
            "street_address": self.street_address,
            "city": self.city,
            "state": self.state,
        }


class Reservation(db.Model):
    __tablename__ = 'reservations'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    venue_id = db.Column(db.Integer, db.ForeignKey(
        "venues.id"), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    price = db.Column(db.Float, nullable=False)
    total = db.Column(db.Float, nullable=False)
    guest_count = db.Column(db.Integer)

    review = db.relationship("Review", back_populates="reservation")
    user = db.relationship("User", back_populates="reservations")
    # venue = db.relationship("Venue", back_populates="reservation")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "venue_id": self.venue_id,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "price": self.price,
            "total": self.total,
            "guest_count": self.guest_count,
        }


class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    venue_id = db.Column(db.Integer, db.ForeignKey("venues.id"))

    user = db.relationship("User", back_populates="favorites")
    venue = db.relationship("Venue", back_populates="favorite")


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    reservation_id = db.Column(db.Integer, db.ForeignKey("reservations.id"))
    venue_id = db.Column(db.Integer, db.ForeignKey("venues.id"))
    rating = db.Column(db.Float)
    comment = db.Column(db.Text)

    media = db.relationship("Media", back_populates="review")
    user = db.relationship("User", back_populates="reviews")
    reservation = db.relationship("Reservation", back_populates="review")
    venue = db.relationship("Venue", back_populates="review")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "reservation_id": self.reservation_id,
            "venue_id": self.venue_id,
            "rating": self.rating,
            "comment": self.comment,
        }


class Media(db.Model):
    __tablename__ = "media"

    id = db.Column(db.Integer, primary_key=True)
    venue_id = db.Column(db.Integer, db.ForeignKey("venues.id"))
    url = db.Column(db.String)
    review_id = db.Column(db.Integer, db.ForeignKey("reviews.id"))

    review = db.relationship("Review", back_populates="media")
    venue = db.relationship("Venue", back_populates="media")

    def to_dict(self):
        return {
            "id": self.id,
            "venue_id": self.venue_id,
            "url": self.url,
            "review_id": self.review_id,

        }
