import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getVenueReviews } from "../../store/VenueReviews";
import { createReservation } from "../../store/reservation";
import "./Reservations.css";
import VenueReviews from "../../components/VenueReview";
import VenueInfo from "../../components/VenueInfo";

const Reservations = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [price, setPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [guestCount, setGuestCount] = useState("");
  let { venueId } = useParams();

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  const reviews = useSelector((state) => {
    return state.VenueReviews;
  });

  const avgRating = (reviews) => {
    if (reviews === null) {
      return <h4>New Venue</h4>;
    } else {
      let avgReview = Object.values(reviews).reduce((a, b) => {
        return a + b.rating;
      }, 0);
      let average = avgReview / Object.values(reviews).length;
      return average.toFixed(2);
    }
  };

  useEffect(() => {
    dispatch(getVenueReviews(venueId));
  }, []);

  return (
    <>
      <div className="container">
        <div className="pics">
          <h1> PICTURES WILL GO HERE</h1>
        </div>
        <div className="info-form">
            <div className="info">
                <VenueInfo />
            </div>
            <div className="rating-form">
                {avgRating(reviews)}
                <div className="reserve-form">
                    <form>
                        <label>
                        Price
                        <input
                            type="integer"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="input"
                            required
                        />
                        </label>
                        <div>
                            <label>
                            Check in Date
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="input"
                                required
                            />
                            </label>
                        </div>
                        <div>
                            <label>
                            Check out Date
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="input"
                                required
                            />
                            </label>
                        </div>
                        <div>
                            <label>
                            Total Price
                            <input
                                type="text"
                                value={totalPrice}
                                onChange={(e) => setTotalPrice(e.target.value)}
                                className="input"
                                required
                            />
                            </label>
                        </div>
                        <div id="reserve-btn">
                            <button id="availability">Check Availability</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="calendar">
          <h1> CALendar!!!!!</h1>
        </div>
        <div className="reviews">
          <VenueReviews />
        </div>
      </div>
    </>
  );
};

export default Reservations;
