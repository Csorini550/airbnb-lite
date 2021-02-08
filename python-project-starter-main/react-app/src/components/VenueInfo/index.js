import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { getVenue } from "../../store/venue"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import * as GdIcons from "react-icons/gr"
import * as GiIcons from 'react-icons/gi'
import "./VenueInfo.css"


const VenueInfo = ({ venue }) => {
    let { venueId } = useParams();
    const dispatch = useDispatch();

    // const venue = useSelector(state => {
    //     return state.venue
    // })

    useEffect(() => {
        dispatch(getVenue(venue.id))
    }, [])



    let venueBooleans = [];

    if (Object.keys(venue).length !== 0) {


        venueBooleans = [
            {
                bool: venue.has_bar,
                text: "Has a bar",
                icon: <MdIcons.MdLocalBar />
            },
            {
                bool: venue.has_kitchen,
                text: "Has a Kitchen",
                icon: <MdIcons.MdKitchen />
            },
            {
                bool: venue.has_rooftop,
                text: "Has a rooftop",
                icon: <GdIcons.GrOverview />
            },
            {
                bool: venue.has_outdoor_seating,
                text: "Has outdoor seating",
                icon: <GiIcons.GiTreeSwing />
            },
            {
                bool: venue.has_heated_outdoor_seating,
                text: "Has heated outdoor seating",
                icon: <AiIcons.AiFillFire />
            },
            {
                bool: venue.has_liquor,
                text: "Has liquor",
                icon: <FaIcons.FaCocktail />
            },
            {
                bool: venue.has_beer,
                text: "Has beer",
                icon: <GiIcons.GiBeerStein />
            },
            {
                bool: venue.has_byob,
                text: "This bar is BYOB",
                icon: <GiIcons.GiShoppingBag />
            },

        ]
    }
    const kidOrTwenty = () => {
        if (venue.twentyone_plus) {
            return (
                "| This venue is 21+ |"
            )
        }
        else if (venue.kid_friendly) {
            return (
                "| This venue is kid friendly |"
            )
        } else {
            return
        }
    }


    const mapFunc = () => {
        return venueBooleans.map((venueBoolean, index) => {
            if (venueBoolean.bool === true) {
                return (

                    <li key={index} >
                        <h3> {venueBoolean.icon} {venueBoolean.text}</h3>
                    </li>

                )
            };

        })
    }


    if (Object.keys(venue).length === 0) return null;

    return (
        <>
            {/* GET VENUE PHOTO FROM CONNECTED TABLE */}
            {/* <img src={venue[venueId].}></img> */}
            <div className="venInfCont">

                <div>
                    {!venue && <h4>Loading...</h4>}
                    <h2>{venue.name} | {venue.type} | {venue.room_type} {kidOrTwenty()}</h2>
                    {/* {venue.link} */}
                    <div className="location">
                        <div>
                            <h3 className="locationh3">Address - {venue.street_address}, {venue.state}, {venue.city}</h3>
                        </div>
                        <div>
                            <h3> Max Occupancy: {venue.total_occupancy}</h3>
                        </div>
                    </div>
                    <div className="parent">
                        <ul className="booleanInfoLi">
                            {mapFunc()}
                        </ul>
                    </div>
                    <div>
                        <div className="sun">
                            <h2 >Summary</h2>
                        </div>
                        <h3 id="sum">{venue.summary}</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VenueInfo;
