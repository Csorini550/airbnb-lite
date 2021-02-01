import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { noSearch } from '../../store/search';
import { useHistory } from 'react-router-dom';
import { createVenueForm } from "../../store/venue"
import './CreateVenue.css';
import Media from "../Media"

const CreateVenue = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("Venue"); // Dropdown
    const [room_type, setRoom_Type] = useState("Restaurant"); // Dropdown
    const [total_occupancy, setTotal_Occupancy] = useState("");
    const [twentyone_plus, setTwentyone_Plus] = useState("All ages welcome");
    const [kid_friendly, setKid_Friendly] = useState("No special amenities");
    const [summary, setSummary] = useState("");
    const [street_address, setStreet_Address] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [has_bar, setHas_Bar] = useState("No");
    const [has_liquor, setHas_Liquor] = useState("No");
    const [has_beer, setHas_Beer] = useState("No");
    const [has_byob, setHas_Byob] = useState("No");
    const [has_kitchen, setHas_Kitchen] = useState("No");
    const [has_outdoor_seating, setHas_Outdoor_Seating] = useState("No");
    const [has_heated_outdoor_seating, setHas_Heated_Outdoor_Seating] = useState("No");
    const [has_rooftop, setHas_Rooftop] = useState("No");
    const [links, setLinks] = useState(null)

    const dispatch = useDispatch();
    // let history = useHistory();

    const loggedInUser = useSelector((state) => {
        return state.session.user;
    });

    // Change state for dropdown menus
    const handleVenueTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleRoomTypeChange = (e) => {
        setRoom_Type(e.target.value);
    }

    const handleAgeChange = (e) => {
        setTwentyone_Plus(e.target.value);
    }

    const handleKidChange = (e) => {
        setKid_Friendly(e.target.value);
    }

    // const updateFiles = (e) => {
    //     const file = e.target.files[0];
    //     setLinks(file);
    // };
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newVenue = {
            type,
            room_type,
            total_occupancy,
            summary,
            has_bar,
            has_kitchen,
            has_rooftop,
            has_heated_outdoor_seating,
            has_liquor,
            price,
            has_beer,
            has_byob,
            has_outdoor_seating,
            name,
            twentyone_plus,
            kid_friendly,
            links,
            street_address,
            city,
            state
        }
        dispatch(createVenueForm(newVenue))


        history.push("/")


    }

    return (
        <div className="container-venue">
            <div className="create-venue">
                <h3 className="create-venue">Create an Experience</h3>
            </div>
            <form className="" onSubmit={handleSubmit}>
                <label className="create-venue">
                    Venue Link
                   <input
                        value={links}
                        type="text"
                        multiple
                        onChange={(e) => setLinks(e.target.value)} />
                </label>
                <label className="create-venue">
                    Name of Experience
                    <input
                        type="text"
                        className="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label className="create-venue" id="price">
                    Price
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        required
                    />
                </label>
                <label className="create-venue">
                    Choose Your Experience
                    <select className="venue-type" value={type} onChange={handleVenueTypeChange} required>
                        <option default value="venue">Venue</option>
                        <option value="online-experience">Online Experience</option>
                        <option value="outdoor-experience">Outdoor Experience</option>
                    </select>
                </label>
                <label className="create-venue">
                    Choose Your Room Type
                    <select className="room-type" value={room_type} onChange={handleRoomTypeChange} required>
                        <option default value="restaurant">Restaurant</option>
                        <option value="tiki-bar">Tiki Bar</option>
                        <option value="sports-bar">Sports Bar</option>
                        <option value="kid-friendly">Kid Friendly</option>
                        <option value="venue-with-view">Venue With a View</option>
                        <option value="heated-outdoor-seating">Heated Outdoor Seating</option>
                        <option disabled>---</option>
                        <option value="cocktail-making">Cocktail Making</option>
                        <option value="cooking-with-master-chef">Cooking With a Master Chef</option>
                        <option value="decorating-plating-entrees">Decorating & Plating Entrees</option>
                        <option value="chicago-pizza-making">Chicago Pizza Making</option>
                        <option disabled>---</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label className="create-venue" id="total-occupancy">
                    Total occupancy
                    <input
                        type="number"
                        id="total-occupancy"
                        value={total_occupancy}
                        onChange={(e) => setTotal_Occupancy(e.target.value)}
                        required
                    />
                </label>
                <label className="create-venue">
                    Age Restrictions
                    <select className="twenty-one-plus" onChange={handleAgeChange} required>
                        <option default value="all-ages-welcome">{twentyone_plus}</option>
                        <option value="twenty-one-plus">21+ and over</option>
                    </select>
                </label>
                <label className="create-venue">
                    Kid Friendly?
                    <select className="kid-friendly" onChange={handleKidChange} required>
                        <option default value="no-kid-amenities">{kid_friendly}</option>
                        <option value="highchairs-available">Highchairs are available</option>
                    </select>
                </label>
                <label className="create-venue" id="summary">
                    Provide a description of the Experience
                    <textarea
                        type="text"
                        className="summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        required
                        placeholder="What makes this Experience unique?"
                    />
                </label>
                <div className="subheading">
                    <h3 className="address-subheading">Address</h3>
                </div>
                <div className="experience-address">
                    <input
                        type="text"
                        className="address"
                        value={street_address}
                        onChange={(e) => setStreet_Address(e.target.value)}
                        required
                        placeholder="Street"
                    />
                </div>
                <div className="experience-address">
                    <input
                        type="text"
                        className="address"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        placeholder="State"
                    />
                </div>
                <div className="experience-address">
                    <input
                        type="text"
                        className="address"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="City"
                    />
                </div>
                <div className="subheading">
                    <h3 className="experience-amenities">Amenities</h3>
                </div>
                <div className="radio-buttons">
                    <p>Is there a bar?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="bar"
                            value={has_bar}
                            onChange={(e) => setHas_Bar(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="bar"
                            value={has_bar}
                            onChange={(e) => setHas_Bar(e.target.value)}
                        /> No
                    </div>
                </div>
                <div className="radio-buttons">
                    <p>Is liquor provided?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="liquor"
                            value={has_liquor}
                            onChange={(e) => setHas_Liquor(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="liquor"
                            value={has_liquor}
                            onChange={(e) => setHas_Liquor(e.target.value)}
                        /> No
                    </div>
                </div>
                <div className="radio-buttons">
                    <p>Is beer provided?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="beer"
                            value={has_beer}
                            onChange={(e) => setHas_Beer(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="beer"
                            value={has_beer}
                            onChange={(e) => setHas_Beer(e.target.value)}
                        /> No
                    </div>
                </div>
                <div className="radio-buttons">
                    <p>Can guests bring their own alcohol?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="byob"
                            value={has_byob}
                            onChange={(e) => setHas_Byob(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="byob"
                            value={has_byob}
                            onChange={(e) => setHas_Byob(e.target.value)}
                        /> No
                    </div>
                </div>
                <div className="radio-buttons">
                    <p>Is there a kitchen?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="kitchen"
                            value={has_kitchen}
                            onChange={(e) => setHas_Kitchen(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="kitchen"
                            value={has_kitchen}
                            onChange={(e) => setHas_Kitchen(e.target.value)}
                        /> No
                    </div>
                </div>
                <div className="radio-buttons">
                    <p>Is there outdoor seating?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="outdoor-seating"
                            value={has_outdoor_seating}
                            onChange={(e) => setHas_Outdoor_Seating(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="outdoor-seating"
                            value={has_outdoor_seating}
                            onChange={(e) => setHas_Outdoor_Seating(e.target.value)}
                        /> No
                    </div>
                </div>
                <div className="radio-buttons">
                    <p>Is the outdoor seating heated?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="heated-outdoor-seating"
                            value={has_heated_outdoor_seating}
                            onChange={(e) => setHas_Heated_Outdoor_Seating(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="heated-outdoor-seating"
                            value={has_heated_outdoor_seating}
                            onChange={(e) => setHas_Heated_Outdoor_Seating(e.target.value)}
                        /> No
                    </div>
                </div>
                <div className="radio-buttons">
                    <p>Is there a rooftop area?</p>
                    <div className="radio-yes">
                        <input
                            type="radio"
                            name="rooftop"
                            value={has_rooftop}
                            onChange={(e) => setHas_Rooftop(e.target.value)}
                        /> Yes
                    </div>
                    <div className="radio-no">
                        <input
                            type="radio"
                            name="rooftop"
                            value={has_rooftop}
                            onChange={(e) => setHas_Rooftop(e.target.value)}
                        /> No
                    </div>
                </div>
                {/* <input type="submit" value="Submit" id="submit-input" /> */}
                <div id="venue-btns">
                    <div className="btns">
                        <button id="submit-btn" value="submit">Submit</button>
                    </div>
                    <div className="btns">
                        <button id="cancel-btn" value="cancel">Cancel</button>
                    </div>
                </div>
            </form>
            {/* <Media /> */}
        </div>
    );
};

export default CreateVenue;
