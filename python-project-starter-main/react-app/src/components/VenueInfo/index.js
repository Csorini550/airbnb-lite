import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { getVenue } from "../../store/venue"

const VenueInfo = () => {
    let { venueId } = useParams();
    const dispatch = useDispatch();

    const venue = useSelector(state => {
        return state.venue
    })

    useEffect(() => {
        dispatch(getVenue(venueId))
    })

    const venueBooleans = [
        venue.has_bar,
        venue.has_kitchen,
        venue.has_rooftop,
        venue.has_outdoor_seating,
        venue.has_heated_outdoor_seating,
        venue.has_liquor,
        venue.has_beer,
        venue.has_byob,
        venue.twentyone_plus, //prolly shouldnt go in array
        venue.kid_friendly, //prolly shouldnt go in array
    ]
    const mapFunc = () => {
        venueBoolean.map(venueBoolean => {
            if (venueBoolea === true) {
                // first letter to cap, splits on _
            };
        })
    }
    venueBoolean.map
    return (
        <>
            <div>

                <div>
                    {!venue && <h4>Loading...</h4>}
                    <h2>{venue.type}</h2>
                    <span>
                        <h4>Max Ocupancy</h4>
                        {venue.guest_count}
                    </span>
                    <span></span>
                </div>
            </div>

        </>
    )
}

export default VenueInfo;