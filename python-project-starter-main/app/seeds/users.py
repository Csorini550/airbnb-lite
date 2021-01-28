from werkzeug.security import generate_password_hash
from app.models import db, User, Venue, Favorite, Review, Reservation, Media

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo_user = User(
        email='demo_user@aa.io',
        first_name="demo",
        last_name="owner",
        profile_image="This is where an image would be",
        description="A wonderful fake human",
        phone_number = 12223334444,
        business_owner=False,
        password='password')

    demo_owner = User(
        email='demo_owner@aa.io',
        first_name="demo",
        last_name="owner",
        profile_image="This is where an image would be",
        description="A wonderful fake human",
        business_owner=True,
        phone_number = 12223334444,
        password='password')

    favorite1 = Favorite(
        user_id=1,
        venue_id=1,
    )

    venue1 = Venue(

        type="Bar",
        room_type="Bar",
        total_occupancy=50,
        summary="A beautiful bar that would be perfect for any event",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=350,
        owner_id=1,
        created_at='2020-01-20',
        update_at='2020-01-20',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=True,
        name="The Best Bar",
        twentyone_plus=True,
        kid_friendly=False,
        street_address="1212",
        state="Illinois",
        city="Chicago"
    )

    venue2 = Venue(

        type="Fine Dining",
        room_type="Restaurant",
        total_occupancy=40,
        summary="Fancy feast",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=False,
        has_liquor=True,
        price=750,
        owner_id=2,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=False,
        name="Cuisine",
        twentyone_plus=False,
        kid_friendly=True,
        street_address = "1212",
        state = "Idaho",
        city = "Boise"
    )

    review1 = Review(
        user_id=2,
        reservation_id=1,
        venue_id=1,
        rating=3,
        comment="I thought the food was ok, but the drinks were pretty amazing. One thing that could have been better was more heat on the outdoor patio. Not only were we a little cold, but the food cooled off very quickly.",
    )

    reservation1 = Reservation(
        user_id=2,
        venue_id=1,
        start_date='2020-01-23',
        end_date='2020-01-23',
        price=350,
        total=365,
        guest_count=28,
    )

    media1 = Media(
        venue_id=1,
        url="https://www.google.com/maps/uv?pb=!1s0x880e2dda3a40679b%3A0x2a21e8ab03f44bc4!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNHDId-xsumYAAlBed9Q606BlUyv1dVEMrFSr4x%3Dw478-h320-k-no!5sroots%20south%20loop%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNHDId-xsumYAAlBed9Q606BlUyv1dVEMrFSr4x&hl=en&sa=X&ved=2ahUKEwiS9rvUi7juAhWLKs0KHWF5BtgQoiowCnoECBUQAw",
        review_id = 1,
    )

    db.session.add(review1)
    db.session.add(media1)
    db.session.add(favorite1)
    db.session.add(venue1)
    db.session.add(venue2)
    db.session.add(reservation1)
    db.session.add(demo_owner)
    db.session.add(demo_user)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users restart identity cascade;')
    db.session.commit()
