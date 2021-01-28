import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { getVenue } from "../../store/venue"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import * as GdIcons from "react-icons/gr"
import * as GiIcons from 'react-icons/gi'
import "./ForTestOnly.css"


const VenueInfo = () => {
    let { venueId } = useParams();
    const dispatch = useDispatch();

    const venue = useSelector(state => {
        return state.venue
    })

    useEffect(() => {
        dispatch(getVenue(venueId))
    }, [])



    let venueBooleans = [];

    if (Object.keys(venue).length !== 0) {


        venueBooleans = [
            {
                bool: venue[venueId].has_bar,
                text: "Has a bar",
                icon: <MdIcons.MdLocalBar />
            },
            {
                bool: venue[venueId].has_kitchen,
                text: "Has a Kitchen",
                icon: <MdIcons.MdKitchen />
            },
            {
                bool: venue[venueId].has_rooftop,
                text: "Has a rooftop",
                icon: <GdIcons.GrOverview />
            },
            {
                bool: venue[venueId].has_outdoor_seating,
                text: "Has outdoor seating",
                icon: <GiIcons.GiTreeSwing />
            },
            {
                bool: venue[venueId].has_heated_outdoor_seating,
                text: "Has heated outdoor seating",
                icon: <AiIcons.AiFillFire />
            },
            {
                bool: venue[venueId].has_liquor,
                text: "Has liquor",
                icon: <FaIcons.FaCocktail />
            },
            {
                bool: venue[venueId].has_beer,
                text: "Has beer",
                icon: <GiIcons.GiBeerStein />
            },
            {
                bool: venue[venueId].has_byob,
                text: "This bar is BYOB",
                icon: <GiIcons.GiShoppingBag />
            },

        ]
    }
    const kidOrTwenty = () => {
        if (venue[venueId].twentyone_plus) {
            return (
                "| This venue is 21+ |"
            )
        }
        else if (venue[venueId].kid_friendly) {
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
                    <li key={index} className="">

                        <h3> {venueBoolean.icon} {venueBoolean.text}</h3>
                    </li>
                )
            };

        })
    }
    if (Object.keys(venue).length === 0) return null;

    return (
        <>
            <h3> Hello VenueInfo</h3>
            <div className="venInfCont">

                <div>
                    {!venue && <h4>Loading...</h4>}
                    <h2>{venue[venueId].type} | {venue[venueId].room_type} {kidOrTwenty()}</h2>
                    <span>
                        <h4>Max Ocupancy {venue[venueId].total_occupancy}</h4>
                    </span>
                    <ul>
                        {mapFunc()}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default VenueInfo;