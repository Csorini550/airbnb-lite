import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component"
import { createReview } from "../../store/reviews";
import { createReservation, getReservation } from "../../store/reservation";
import './CreateReview.css';
import Reservations from '../Reservations';

const CreateReview = () => {
    const { venueId } = useParams();
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const history = useHistory();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReservation(loggedInUser.id));
    }, [])

    const loggedInUser = useSelector((state) => {
        return state.session.user;
    });

    const reservation = useSelector((state) => {
        return state.reservations
    })

    if (Object.keys(reservation).length === 0) return null;
    const reservation_id = Object.keys(reservation).length - 1
    // const ratingg = 3;

    const ratingChanged = (newRating) => {
        // newRating.target.value
        setRating(newRating)
        console.log(newRating);
    };

    const handleCancel = () => {
        history.push("/")
    }
    // For Redux dispatch
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Pass this into backend
        const newReview = {
            user_id: loggedInUser.id,
            reservation_id,
            venue_id: venueId,
            rating,
            title,
            comment: review,
        };
        console.log("THIS SHOULD BE THE RATING:", typeof Object.entries(rating))
        dispatch(createReview(newReview))
        history.push(`/reservations/${venueId}`);
    };

    return (
        <div className="container-review">
            <div className="create-review" id="review-header">
                <h1>Add Your Review</h1>
            </div>
            <div className="review-form">
                <form className="create-review">
                    <div className="create-review" id="review-description">
                        <p>
                            We would love to hear about your experience with SpeakEasy. Please provide any thoughts you may have so that we can improve based on your feedback!
                        </p>
                    </div>
                    <div className="create-review" id="title-star">
                        <div className="create-review">
                            <input
                                id="review-title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                placeholder="Review Title"
                            />
                        </div>
                        <div className="create-review" id="stars">
                            <ReactStars
                                count={5}
                                value={rating}
                                color="#ffd700"
                                isHalf={true}
                                onChange={ratingChanged}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                edit={true}
                            // onChange={(e) => setRating(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="create-review">
                        <textarea
                            type="text"
                            id="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                            placeholder="How did everything go?"
                        />
                    </div>
                    <div className="create-review" id="review-btns">
                        <div className="btns">
                            <button onClick={handleSubmit} id="submit-btn" value="submit">Submit</button>
                        </div>
                        <div className="btns">
                            <button onClick={handleCancel} id="cancel-btn" value="cancel">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="create-review" id="review-pics">
                <div id="pic-large"></div>
                <div id="small-pic-container">
                    <div id="pic-small"></div>
                    <div id="pic-small"></div>
                </div>
            </div>
        </div>
    );
};

export default CreateReview;
