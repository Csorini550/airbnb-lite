import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getVenueReviews } from "../../store/VenueReviews";
import ReactStars from "react-rating-stars-component";
import "./VenueReview.css"
const VenueReview = () => {
    let { venueId } = useParams();
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => {
        return state.session.user;
    })
    const reviews = useSelector(state => {
        return state.VenueReviews;
    });

    useEffect(() => {
        dispatch(getVenueReviews(venueId))
    }, [])

    return (
        <div className="rev-cont">
            <h1>Recent customer reviews</h1>
            <div>
                {!reviews && <h4>Loading...</h4>}
                {Object.values(reviews).map(review => {
                    if (review.comment !== null) {
                        return (
                            <div>
                                <ReactStars
                                    count={5}
                                    value={review.rating}
                                    color="#ffd700"
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    edit={false}
                                />
                                <h3>{review.comment}</h3>
                            </div>
                        )
                    }
                })}

            </div>
        </div>
    )



}



export default VenueReview;
