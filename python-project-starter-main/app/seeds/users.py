from werkzeug.security import generate_password_hash
from app.models import db, User, Venue, Review, Reservation, Media

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo_user = User(
        email='demo_user@aa.io',
        first_name="demo",
        last_name="owner",
        profile_image="This is where an image would be",
        description="A wonderful fake human",
        phone_number=12223334444,
        business_owner=False,
        password='password')

    demo_owner = User(
        email='demo_owner@aa.io',
        first_name="demo",
        last_name="owner",
        profile_image="This is where an image would be",
        description="A wonderful fake human",
        business_owner=True,
        phone_number=12223334444,
        password='password')

    venue1 = Venue(

        type="Venue",
        room_type="HeatedOutdoorSeating",
        total_occupancy=50,
        summary="A beautiful bar that would be perfect for any event",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=350,
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
        city="Chicago",
        links="https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_960_720.jpg"
    )

    venue2 = Venue(

        type="Venue",
        room_type="Restaurant",
        total_occupancy=40,
        summary="Fine dining establishment available for private group dining",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=False,
        has_liquor=True,
        price=899,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=False,
        name="Frederic's",
        twentyone_plus=False,
        kid_friendly=True,
        street_address="1212",
        state="Idaho",
        city="Boise",
        links="https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_1280.jpg"
    )
    venue3 = Venue(

        type="Venue",
        room_type="Restaurant",
        total_occupancy=40,
        summary="Best barbecue in all of Boise.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=False,
        has_liquor=True,
        price=750,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=False,
        name="BBQ Inc.",
        twentyone_plus=False,
        kid_friendly=True,
        street_address="1212",
        state="Idaho",
        city="Boise",
        links="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg"
    )
    venue4 = Venue(

        type="Venue",
        room_type="View",
        total_occupancy=50,
        summary="Gorgeous night views of the city.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=999,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=True,
        name="The Lakefront",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Illinois",
        city="Chicago",
        links="https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_1280.jpg"
    )
    venue5 = Venue(

        type="Venue",
        room_type="Sports",
        total_occupancy=60,
        summary="We like sports.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=False,
        has_liquor=True,
        price=550,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=True,
        has_outdoor_seating=False,
        name="Murphy's",
        twentyone_plus=True,
        kid_friendly=False,
        street_address="1212",
        state="Oklahoma",
        city="Tulsa",
        links="https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_1280.jpg"
    )
    venue6 = Venue(

        type="Venue",
        room_type="Restaurant",
        total_occupancy=70,
        summary="Chic Parisian cafe in the heart of Chicago",
        has_bar=False,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=False,
        has_liquor=False,
        price=250,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=False,
        has_byob=False,
        has_outdoor_seating=False,
        name="Angelique's",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Wisconsin",
        city="Milwaukee",
        links="https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_1280.jpg"
    )
    venue7 = Venue(

        type="Venue",
        room_type="Tiki",
        total_occupancy=40,
        summary="It's tiki time.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=False,
        has_liquor=True,
        price=170,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=False,
        name="Bonfire",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Texas",
        city="Houston",
        links="https://cdn.pixabay.com/photo/2015/04/20/13/43/illumination-731494_1280.jpg"
    )
    venue8 = Venue(

        type="Venue",
        room_type="HeatedOutdoorSeating",
        total_occupancy=40,
        summary="Patio and interior available for rental.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=200,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=False,
        name="Mishiguene",
        twentyone_plus=False,
        kid_friendly=True,
        street_address="1212",
        state="Washington",
        city="Seattle",
        links="https://cdn.pixabay.com/photo/2016/11/21/16/02/bar-1846137_1280.jpg"
    )
    venue9 = Venue(

        type="Venue",
        room_type="KidFriendly",
        total_occupancy=65,
        summary="Happy Days with family and friends.",
        has_bar=False,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=200,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=False,
        has_outdoor_seating=False,
        name="Johnny Rocket's",
        twentyone_plus=False,
        kid_friendly=True,
        street_address="1212",
        state="Illinois",
        city="Springfield",
        links="https://cdn.pixabay.com/photo/2016/11/18/22/21/architecture-1837150_1280.jpg"
    )
    venue10 = Venue(

        type="Venue",
        room_type="Sports",
        total_occupancy=75,
        summary="Everything on tap for a great night.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=370,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=True,
        has_outdoor_seating=False,
        name="Bar One",
        twentyone_plus=False,
        kid_friendly=True,
        street_address="1212",
        state="Michigan",
        city="Detroit",
        links="https://cdn.pixabay.com/photo/2015/09/02/12/35/bar-918541_1280.jpg"
    )
    venue11 = Venue(

        type="Venue",
        room_type="Tiki",
        total_occupancy=50,
        summary="Vibrant bar with a dance floor.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=False,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=500,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=True,
        has_outdoor_seating=False,
        name="Indigo",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Michigan",
        city="Grand Rapids",
        links="https://cdn.pixabay.com/photo/2015/09/02/12/35/bar-918541_1280.jpg"
    )
    venue12 = Venue(

        type="Venue",
        room_type="View",
        total_occupancy=40,
        summary="Prohibition setting with a wonderful view.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=600,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=True,
        has_outdoor_seating=False,
        name="Gin & Tonic",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Michigan",
        city="Kalamazoo",
        links="https://cdn.pixabay.com/photo/2015/07/02/10/27/bar-828768_1280.jpg"
    )
    venue13 = Venue(

        type="Venue",
        room_type="Sports",
        total_occupancy=70,
        summary="Best ribs in town.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=755,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=True,
        has_outdoor_seating=False,
        name="Ribhouse",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Alabama",
        city="Montgomery",
        links="https://cdn.pixabay.com/photo/2016/10/16/21/13/drinks-1746272_1280.jpg"
    )
    venue14 = Venue(

        type="Venue",
        room_type="View",
        total_occupancy=70,
        summary="Rooftop pool and bar.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=899,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=True,
        has_outdoor_seating=True,
        name="Bridge House",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Virginia",
        city="Richmond",
        links="https://cdn.pixabay.com/photo/2018/09/04/02/13/pool-bar-3652849_1280.jpg"
    )
    venue15 = Venue(

        type="Venue",
        room_type="HeatedOutdoorSeating",
        total_occupancy=30,
        summary="Bright and airy event space and cafe.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=570,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=True,
        has_byob=True,
        has_outdoor_seating=True,
        name="La Mer",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Illinois",
        city="Chicago",
        links="https://cdn.pixabay.com/photo/2015/03/26/09/42/breakfast-690128_1280.jpg"
    )
    venue16 = Venue(

        type="Venue",
        room_type="View",
        total_occupancy=80,
        summary="Watch the boats sail by!",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=999,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=False,
        has_byob=False,
        has_outdoor_seating=True,
        name="Yacht Club",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="Florida",
        city="Miami",
        links="https://cdn.pixabay.com/photo/2017/08/17/00/26/breakfast-2649620_1280.jpg"
    )
    venue17 = Venue(

        type="Venue",
        room_type="KidFriendly",
        total_occupancy=80,
        summary="Your kid's favorite restaurant.",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=999,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=False,
        has_byob=False,
        has_outdoor_seating=True,
        name="Five Napkin Burger",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="California",
        city="Los Angeles",
        links="https://cdn.pixabay.com/photo/2017/08/07/11/14/restaurant-2602736_1280.jpg"
    )
    venue18 = Venue(

        type="Venue",
        room_type="KidFriendly",
        total_occupancy=55,
        summary="All of the charm and kitsch of a school cafeteria",
        has_bar=True,
        has_kitchen=True,
        has_rooftop=True,
        has_heated_outdoor_seating=True,
        has_liquor=True,
        price=460,
        created_at='2020-01-15',
        update_at='2020-01-15',
        has_beer=False,
        has_byob=False,
        has_outdoor_seating=True,
        name="Cafeteria",
        twentyone_plus=False,
        kid_friendly=False,
        street_address="1212",
        state="California",
        city="San Francisco",
        links="https://cdn.pixabay.com/photo/2017/03/27/14/21/chairs-2179044_1280.jpg"
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
        review_id=1,
    )

    db.session.add(review1)
    db.session.add(media1)
    db.session.add(venue1)
    db.session.add(venue2)
    db.session.add(venue3)
    db.session.add(venue4)
    db.session.add(venue5)
    db.session.add(venue6)
    db.session.add(venue7)
    db.session.add(venue8)
    db.session.add(venue9)
    db.session.add(venue10)
    db.session.add(venue11)
    db.session.add(venue12)
    db.session.add(venue13)
    db.session.add(venue14)
    db.session.add(venue15)
    db.session.add(venue16)
    db.session.add(venue17)
    db.session.add(venue18)
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
    db.session.execute('TRUNCATE venues restart identity cascade;')
    db.session.commit()
