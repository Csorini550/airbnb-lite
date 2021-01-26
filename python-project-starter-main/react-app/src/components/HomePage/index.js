import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from "react";
import cooking from "./cooking.jpg"
import chicago from "./chi.jpg"
import drink from "./drink-making.jpg"
import plating from "./plating.jpg"
import sportsBar from "./bar.jpg"
import tikiBar from "./tikiBar.jpg"
import kidFriendly from "./kidFriendly.jpg"
import rooftopBar from "./rooftopBar.jpg"
import heatedSeating from "./heatedSeating.jpg"
import restaurant from "./restaurant.jpg"
import "./HomePage.css"


let states = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"]


let venueTypes = [
    { text: "Tiki Bar", img: tikiBar, },
    { text: "Sports Bar", img: sportsBar },
    { text: "Restaurant", img: restaurant },
    { text: "Kid Friendly", img: kidFriendly, },
    { text: "Venue with a view", img: rooftopBar },
    { text: "Heated Outdoor Seating", img: heatedSeating }
]

let onlineExperiences = [
    { text: "Cocktail making", img: drink },
    { text: "Cooking with a master chef", img: cooking },
    { text: "Decorating & Plating entres", img: plating },
    { text: "Chicago Pizza Making", img: chicago }
]

let hostOptions = [
    { text: "Host your venue", },
    { text: "Host an Online Experience", },
    { text: "Host an Experience", }

]


const Home = () => {
    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    return (
        <>
            <div>Welcome to....</div>
            <div className="div venueTypes">
                <h3>Types of venues</h3>
                {venueTypes.map((venueType) => {
                    return (
                        <div className="img">
                            <Link className="venueType link">
                                <h4>{venueType.text}</h4>
                                <img className="online-image" src={venueType.img} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="div experience">
                <h3>Online Experience</h3>
                {hostOptions.map((hostOption) => {
                    return (
                        <div className="img experience-block">
                            <Link id="experience-link" className="link" to="#">
                                <img className="online-image" src={hostOption.img} />
                                <h4>{hostOption.text}</h4>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="div hosts">
                <h3>Join millions of hosts on..</h3>
                {onlineExperiences.map((onlineExperience) => {
                    return (
                        <div className="img">
                            <h4>{onlineExperience.text}</h4>
                            <Link className="link" to="#" >
                                <img className="online-image" src={onlineExperience.img} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="div states">
                <h3>Inspiration for future getaways</h3>
                {states.map((state) => {
                    return (
                        <Link className="link" to="/venues/{state}" >{state}</Link>
                    )
                })}
            </div>
        </>
    )
}

export default Home;