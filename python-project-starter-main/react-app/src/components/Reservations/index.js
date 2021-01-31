import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getVenueReviews } from "../../store/VenueReviews";
import { createReservation, getReservation } from "../../store/reservation";
import "./Reservations.css";
import VenueReviews from "../../components/VenueReview";
import VenueInfo from "../../components/VenueInfo";
import Map from "../../components/Map";
import { getVenue } from "../../store/venue";
import ReactStars from "react-rating-stars-component";

const Reservations = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("$700");
  const [guestCount, setGuestCount] = useState("");
  let { venueId } = useParams();
  // console.log(venueId)

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  const reservations = useSelector((state) => {
    return state.reservations;
  });

  //   console.log("RESERVATIONS!!!!!!!!!!!!!!!!!!!!", reservations);
  //   console.log("LENGTH!!!!!!!!!!!!!!!!!!!", Object.keys(reservations).length);

  //   const newReservationId = (reservations) => {
  //     const reservationIdCount = Object.keys(reservations).length;
  //     // console.log("COUNT!!!!!!!!!!!!!!!!!!!!", reservationIdCount)
  //     const reservationId = reservationIdCount + 1;
  //     return reservationId;
  //   };

  //   const reservationId = newReservationId();
  //   console.log("RESERVATION_ID!!!!!!!!!!", reservationId);
  //   console.log("NEW_RESERVATION_ID!!!!!!!!!!", newReservationId());

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

  // Access to venue state from front end (redux)
  const venue = useSelector((state) => {
    return state.search[venueId]
  });

  useEffect(() => {
    dispatch(getVenue(venue.id));
    dispatch(getVenueReviews(venue.id)); //venueId
    dispatch(getReservation(loggedInUser.id));
  }, []);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch('/api/reservations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: loggedInUser.id,
        venue_id: venueId,
        start_date: startDate,
        end_date: endDate,
        price: price,
        total,
        guest_count: guestCount
      })
    });
    let data = await res.json();

    history.push(`/create-review/${venueId}`);
  }

  // let totalPrice = () => {
  //     let total = price * days;
  // };

  // Prevents "undefined" error from trying to load before state is updated
  if (Object.keys(venue).length === 0) return null;

  return (
    <>
      <div className="container">
        <div className="pics">

          <h1> PICTURES WILL GO HERE</h1>
        </div>
        <div className="info-form">
          <div className="info">
            <VenueInfo venue={venue} />
          </div>
          <div className="rating-form">
            <ReactStars
              count={5}
              value={avgRating(reviews)}
              color="#ffd700"
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              edit={false}
            />
            <div className="reserve-form">
              <div>
                <h3>Price: {venue.price}</h3>
              </div>
              <form onSubmit={handleSubmit}>
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
                <div id="reserve-btn">
                  <button id="availability">Check Availability</button>
                </div>
                <div>
                  <h3>Total Price: {total}</h3>
                </div>
                <div id="reserve-btn">
                  <button id="reserve">Reserve</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="reviews">
          <VenueReviews />
        </div>
        <div className="calendar">
          <h1> Calendar!!!!!</h1>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Reservations;