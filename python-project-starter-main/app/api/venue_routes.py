from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Venue, Media
from app.models import db
from app.forms import NewVenueForm
from app.forms import NewMediaForm
from werkzeug.utils import secure_filename
import boto3
import botocore
from app.config import Config


venue_routes = Blueprint('venues', __name__)

# GET ALL VENUES


@venue_routes.route('/')
def all_venues():
    venues = Venue.query.all()
    return {venue.id: venue.to_dict() for venue in venues}


# GET ONE VENUE BY ID
@venue_routes.route('/<int:venueId>')
def venue(venueId):
    venue = Venue.query.get(venueId)
    if venue:
        return {
            venue.id: venue.to_dict()
        }
    return '<h1>Could not find venue</h1>'


@venue_routes.route("/media", methods=["POST"])
def upload_file():
    # newFile = Media(
    #     venue_id=form.data["venue_id"],
    #     url=str(output)
    #     review_id=str(output)
    # )

    # print("LOOK AT ME!!!!!", newFile)

    # A
    if "file" not in request.files:
        for file in request.files:
            return {"errors": "No file key in request.files"}, 500

        # B
    file = request.files["file"]

    """
        These attributes are also available

        file.filename               # The actual name of the file
        file.content_type
        file.content_length
        file.mimetype

    """

    # C.
    if file.filename == "":
        return "Please select a file"

        # D.
    file.filename = secure_filename(file.filename)
    output = upload_file_to_s3(file, Config.S3_BUCKET)
    form = NewMediaForm()  # not sure if class will be called this

    newFile = Media(
        venue_id=form.data["venue_id"],
        url=str(output)
        # review_id=str(output)
    )

    db.session.add(newFile)
    db.session.commit()
    return str(output)


s3 = boto3.client(
    "s3",
    aws_access_key_id=Config.S3_KEY,
    aws_secret_access_key=Config.S3_SECRET
)


def upload_file_to_s3(file, bucket_name, acl="public-read"):

    print("PLEASE SHOW!!!", Config.S3_BUCKET, Config.S3_SECRET, Config.S3_KEY)
    try:

        s3.upload_fileobj(
            file,
            bucket_name,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )

    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something Happened: ", e)
        return e
    return "{}{}".format(Config.S3_LOCATION, file.filename)

# @venue_routes.route('/media', methods=["POST"])
# def media():
#     data = request.get_json()
#     new_media = Media(
#         venue_id=data['venue_id'],
#         url=data['url'],
#         review_id=data['review_id'],
#     )

#     return new_media.to_dict()


@venue_routes.route('/', methods=['POST'])
# @login_required
def new_venue():
    form = NewVenueForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    newVenue = Venue(
        # owner_id=form.data['owner_id'],
        name=form.data['name'],
        price=form.data['price'],
        type=form.data['type'],
        room_type=form.data['room_type'],
        total_occupancy=form.data['total_occupancy'],
        twentyone_plus=form.data['twentyone_plus'],
        kid_friendly=form.data['kid_friendly'],
        summary=form.data['summary'],
        street_address=form.data['street_address'],
        city=form.data['city'],
        state=form.data['state'],
        has_bar=form.data['has_bar'],
        has_kitchen=form.data['has_kitchen'],
        has_rooftop=form.data['has_rooftop'],
        has_heated_outdoor_seating=form.data['has_heated_outdoor_seating'],
        has_liquor=form.data['has_liquor'],
        has_beer=form.data['has_beer'],
        has_byob=form.data['has_byob'],
        has_outdoor_seating=form.data['has_outdoor_seating'],
        created_at="2020-01-20",
        update_at="2020-01-20"

    )
    db.session.add(newVenue)
    db.session.commit()
    print(form.data)

    return newVenue.to_dict()

    # return {'errors': validation_errors_to_error_messages(form.errors)}
