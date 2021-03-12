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
import reserved from "./543675208-huge.jpg"
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

    { text: "Restaurant", img: restaurant, type: 'Restaurant' },
    { text: "Bar", img: sportsBar, type: 'Sports' },
    { text: "Event Space", img: rooftopBar, type: 'View' },
]
// SEARCH ONLINE EXPERIENCES FOR TYPE. HAS TO BE ONE WORD. CURRENTLY NO SEEDERS IN DATABASE FOR ONLINE EXPERIENCE
let onlineExperiences = [
    { text: "Cocktail making", img: drink, type: 'Cocktail' },
    { text: "Cooking with a master chef", img: cooking, type: 'Cooking' },
    { text: "Decorating & Plating entres", img: plating, type: 'Decorating' },
    { text: "Chicago Pizza Making", img: chicago, type: 'ChicagoPizza' }
]

let categories = [
    { text: "Heated Outdoor Seating", img: heatedSeating, type: 'HeatedOutdoorSeating' },
    { text: "Tiki Bar", img: tikiBar, type: 'Tiki' },
    { text: "Kid Friendly", img: kidFriendly, type: 'KidFriendly' },
    { text: "Venue with a view", img: rooftopBar, type: 'View' },
    { text: "Sports Bar", img: sportsBar, type: 'Sports' },

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
                    <h1 className="font splash-head">Welcome to SpeakEasy</h1>
                    <h2 className="home-splash">It's never been so easy</h2>
                    <h2 className="home-splash">to host private events</h2>
                    <h2 className="home-splash">at your favorite venues</h2>
                </div>
                <div className='home-categories'>
                    <div className="venuehome">
                        <h3 className="font homepage-headers">Types of venues</h3>
                    </div>
                    <div className="home-row">
                        {venueTypes.map((venueType) => {
                            return (
                                <div className="img">
                                    <Link onClick={() => searchByRoomType(venueType)} to='/results' className="venueType link">
                                        <img className="online-image" src={venueType.img} />
                                        <h4 className="home-labels">{venueType.text}</h4>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="onlineh3 textHome">
                <h3 className="white font">Join millions of hosts on SpeakEasy</h3>
                <div className="div experience">
                    {hostOptions.map((hostOption) => {
                        return (
                            <div className="img experience-block">
                                <Link className="link experience-link" to="/create-venue">
                                    <img className="car-image" src={hostOption.img} />
                                    <h4>{hostOption.text}</h4>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="textHome">
                <div className="experience-categories">

                    <h3 className="font homepage-headers">Choose an Online Experience</h3>
                </div>
                <div className="div hosts">
                    {onlineExperiences.map((onlineExperience) => {
                        return (
                            <div className="img online-image">
                                <Link onClick={() => searchOnlineExperience(onlineExperience)} className="link" to="/results" >
                                    <img className="experience-image" src={onlineExperience.img} />
                                </Link>
                                <h4 className="exp-labels">{onlineExperience.text}</h4>
                            </div>
                        )
                    })}
                </div>
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