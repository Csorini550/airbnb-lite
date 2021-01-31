
// import { createUser } from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createMedia } from "../../store/media"
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { getVenue } from "../../store/venue"
import "./TEST.css"


const Media = () => {
    const dispatch = useDispatch();
    // let { venueId, reviewId } = useParams();

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

    // const venueId = venue[0].id;
    console.log(venue)
    const data = ({
        url: images,
        // venue_id: venueId,

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMedia(images))
        // dispatch(getVenue(loggedInUser.id))
        //TODO!!
        // Have to add this dispatch into barrys handle submit then can delete this submit

    }



    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const res = await fetch('/api/venues/media', {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             url: images
    //         })
    //     })

    //     return res.json()

    // }

    const updateFiles = (e) => {
        const file = e.target.files[0];
        setImages(file);
    };

    return (
        <div className="test">
            <form onSubmit={handleSubmit} >
                <label>
                    Upload an image
            <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                </label>
                <button type="submit">Upload Image</button>
            </form>
        </div>
    )



}
export default Media;