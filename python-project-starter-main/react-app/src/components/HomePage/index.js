import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from "react";


let states = ["Alaska",
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
    "Tiki Bar",
    "Sports Bar",
    "Restaurant",
    "Kid Friendly",
    "Venue with a view",
    "Heated Outdoor Seating"
]

let onlineExperiences = [
    "Cocktail making",
    "Cooking with a master chef",
    "Decorating",
    "Getting to know the local cuisine"
]

let hostOptions = [
    "Host your venue",
    "Host your",

]

const Home = () => {
    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    return (
        <>
            <div>Home Page</div>

            <div className="venueTypes">
                <h3>Types of venues</h3>
                {venueTypes.map((venueType) => {
                    return (
                        <div className="venueType">{venueType}</div>
                    )
                })}
            </div>
            <div>
                <h3>Online Experience</h3>
                {onlineExperiences.map((onlineExperience) => {
                    return (
                        <div>{onlineExperience}</div>
                    )
                })}
            </div>
            <div>
                <h3>Join millions of hosts on..</h3>

            </div>
        </>
    )
}

export default Home;