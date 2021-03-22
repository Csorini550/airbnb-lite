import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from "react";
import { roomTypeSearch, stateSearch, onlineExperienceTypeSearch } from '../../store/search'
import cooking from "./cooking.jpg"
import chicago from "./pizza.jpg"
import drink from "./drink-making.jpg"
import plating from "./plating.jpg"
import sportsBar from "./bar.jpg"
import tikiBar from "./tikiBar.jpg"
import kidFriendly from "./kidFriendly.jpg"
import rooftopBar from "./rooftopBar.jpg"
import heatedSeating from "./heatedSeating.jpg"
import restaurant from "./restaurant.jpg"
import barCar from "./cartoonBar.jpg"
import onlineCar from "./onlineCartoon.jpg"
import outsideCar from "./outsideCartoon.jpg"
import "./HomePage.css"


let states = [
    { text: "Alaska" },
    { text: "Alabama" },
    { text: "Arkansas" },
    { text: "Arizona" },
    { text: "California" },
    { text: "Colorado" },
    { text: "Connecticut" },
    { text: "Delaware" },
    { text: "Florida" },
    { text: "Georgia" },
    { text: "Hawaii" },
    { text: "Iowa" },
    { text: "Idaho" },
    { text: "Illinois" },
    { text: "Indiana" },
    { text: "Kansas" },
    { text: "Kentucky" },
    { text: "Louisiana" },
    { text: "Massachusetts" },
    { text: "Maryland" },
    { text: "Maine" },
    { text: "Michigan" },
    { text: "Minnesota" },
    { text: "Missouri" },
    { text: "Mississippi" },
    { text: "Montana" },
    { text: "North Carolina" },
    { text: "North Dakota" },
    { text: "Nebraska" },
    { text: "New Hampshire" },
    { text: "New Jersey" },
    { text: "New Mexico" },
    { text: "Nevada" },
    { text: "New York" },
    { text: "Ohio" },
    { text: "Oklahoma" },
    { text: "Oregon" },
    { text: "Pennsylvania" },
    { text: "Rhode Island" },
    { text: "South Carolina" },
    { text: "South Dakota" },
    { text: "Tennessee" },
    { text: "Texas" },
    { text: "Utah" },
    { text: "Virginia" },
    { text: "Vermont", },
    { text: "Washington" },
    { text: "Wisconsin" },
    { text: "West Virginia" },
    { text: "Wyoming" }
]

// USED ONE WORD FOR TYPE IN ORDER TO SEARCH DATABASE IN BACKEND. DATABASE ROOM_TYPE MUST MATCH
let venueTypes = [
    { text: "Tiki Bar", img: tikiBar, type: 'Tiki' },
    { text: "Sports Bar", img: sportsBar, type: 'Sports' },
    { text: "Restaurant", img: restaurant, type: 'Restaurant' },
    { text: "Kid Friendly", img: kidFriendly, type: 'KidFriendly' },
    { text: "Venue with a view", img: rooftopBar, type: 'View' },
    { text: "Heated Outdoor Seating", img: heatedSeating, type: 'HeatedOutdoorSeating' }
]
// SEARCH ONLINE EXPERIENCES FOR TYPE. HAS TO BE ONE WORD. CURRENTLY NO SEEDERS IN DATABASE FOR ONLINE EXPERIENCE
let onlineExperiences = [
    { text: "Cocktail making", img: drink, type: 'Cocktail' },
    { text: "Cooking with a master chef", img: cooking, type: 'Cooking' },
    { text: "Decorating & Plating entres", img: plating, type: 'Decorating' },
    { text: "Chicago Pizza Making", img: chicago, type: 'ChicagoPizza' }
]

let hostOptions = [
    { text: "Host your venue", img: barCar },
    { text: "Host an Online Experience", img: onlineCar },
    { text: "Host an Experience", img: outsideCar }

]


const Home = () => {
    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    const dispatch = useDispatch();

    const searchByRoomType = (venueType) => {
        let searchTerm = venueType.type
        return dispatch(roomTypeSearch(searchTerm))
    }

    const searchByState = (state) => {
        let searchTerm = state.text
        return dispatch(stateSearch(searchTerm))
    }

    const searchOnlineExperience = (onlineExperience) => {
        let searchTerm = onlineExperience.type
        return dispatch(onlineExperienceTypeSearch(searchTerm))
    }


    return (
        <>
            <div className="home-main">
                <div className="home-header">
                    <h1 className="font">Welcome to SpeakEasy</h1>
                    <h2>It's never been so easy to host private events at your favorite venues</h2>
                </div>
                <div>
                    <div className="venuehome">
                        <h3 className="font">Types of venues</h3>
                    </div>
                    {venueTypes.map((venueType) => {
                        return (
                            <div className="img">
                                <Link onClick={() => searchByRoomType(venueType)} to='/results' className="venueType link">
                                    <h4>{venueType.text}</h4>
                                    <img id="img" className="online-image" src={venueType.img} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="onlineh3 textHome">
                <h3 className="white font">Join millions of hosts on SpeakEasy</h3>
            </div>
            <div className="div experience">
                {hostOptions.map((hostOption) => {
                    return (
                        <div className="img experience-block">
                            <Link id="experience-link" className="link" to="/create-venue">
                                <img id="img" className="car-image" src={hostOption.img} />
                                <h4>{hostOption.text}</h4>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="textHome">
                <h3 className="font">Choose an Online Experience</h3>
            </div>
            <div className="div hosts">
                {onlineExperiences.map((onlineExperience) => {
                    return (
                        <div className="img">
                            <h4>{onlineExperience.text}</h4>
                            <Link onClick={() => searchOnlineExperience(onlineExperience)} className="link" to="/results" >
                                <img id="img" className="online-image" src={onlineExperience.img} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <h3 className="font-states">Inspiration for future getaways</h3>
            <div className="states">
                {states.map((state) => {
                    return (
                        <div id="stateid" className="state-div">
                            <Link onClick={() => searchByState(state)} className="state-link" to="/results" >{state.text}</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home;