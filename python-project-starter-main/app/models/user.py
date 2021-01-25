from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.Integer)
    description = db.Column(db.Text)
    profile_image = db.Column(db.String)
    business_owner = db.Column(db.Boolean)

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
            "username": self.username,
            "email": self.email,
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
    links = db.Column(db.String, nullable=False)


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


class Favorite(db.Model):
    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    venue_id = db.Column(db.Integer, db.ForeignKey("venues.id"))


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    reservation_id = db.Column(db.Integer, db.ForeignKey("reservations.id"))
    venue_id = db.Column(db.Integer, db.ForeignKey("venues.id"))
    rating = db.Column(db.Float)
    comment = db.Column(db.Text)


class Media(db.Model):
    __tablename__ = "media"

    id = db.Column(db.Integer, primary_key=True)
    venue_id = db.Column(db.Integer, db.ForeignKey("venues.id"))
    url = db.Column(db.String)
    review_id = db.Column(db.Integer, db.ForeignKey("reviews.id"))
