
// import { createUser } from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createMedia } from "../../store/media"
import { useHistory, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { getVenue, getAllVenues } from "../../store/venue"
import { getMedia } from "../../store/media"
import Footer from "../../components/Footer"
import "./TEST.css"


const Media = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { venueId } = useParams();
    // let { venueId } = useParams();

    const [images, setImages] = useState(null)
    const [text, setText] = useState("")




    const loggedInUser = useSelector(state => {
        return state.session.user;
    })

    const media = useSelector((state) => {
        return state.media;
    });

    const venue = useSelector((state) => {
        return state.venue;
    })
    // if (Object.keys(venue).length === 0) return null;
    // const venueId = Object.keys(venue).length - 1

    useEffect(() => {
        dispatch(getAllVenues())
        dispatch(getMedia(venueId))
    }, [])

    // const data = {
    //     url: images,
    //     venue_id: venueId,

    // }





    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            url: images,
            venue_id: venueId,

        }
        dispatch(createMedia(data))
        //help
        //i should have access to venueId via use params but i cant get the venues to show up in state from create-venues
        // change line64 to history.push(/reservations/${<one higher than how ever many venues we have in our db i.e. 50>}) for presentation
        history.push(`/reservations/${venueId}`)
    }
    //for panic


    const updateFiles = (e) => {
        const file = e.target.files[0];
        setImages(file);
    };

    return (
        <div className="big-div">

            <div id="test">
                <h4> Step 2</h4>
                <h3>Choose an image that best describes the experience a customer will have</h3>

                <form className="file" onSubmit={handleSubmit} >
                    <label>
                        <input
                            type="file"
                            multiple
                            onChange={updateFiles} />
                    </label>
                    <button type="submit">Upload Image</button>
                </form>
            </div>
            <Footer />
        </div>
    )



}
export default Media;