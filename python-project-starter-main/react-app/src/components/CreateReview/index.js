import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component"
import { createReview } from "../../store/reviews";
import './CreateReview.css';

const CreateReview = () => {
    const { venueId } = useParams();
    const [rating, setRating] = useState(null);
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");

    const dispatch = useDispatch();

    const loggedInUser = useSelector((state) => {
        return state.session.user;
    });

    // For Redux dispatch
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Pass this into backend
        const newReview = {
            user_id: loggedInUser.id,
            // reservation_id,
            venue_id: venueId,
            rating,
            title,
            review,
        };
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
                            <button id="submit-btn" value="submit">Submit</button>
                        </div>
                        <div className="btns">
                            <button id="cancel-btn" value="cancel">Cancel</button>
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
