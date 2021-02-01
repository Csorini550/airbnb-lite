// import { fetch } from './csrf';
const initialState = {}


const CREATE_MEDIA = "media/createMedia"
const GET_MEDIA = "media/getMedia"
const CREATE_VENUE = "venue/createVenue"

// const createVenueAction = (venue) =>({
//     type:CREATE_VENUE,
//     payload: venue
// })

const getMediaAction = (media) => ({
    type: GET_MEDIA,
    payload: media
})

const createMediaAction = (media) => ({
    type: CREATE_MEDIA,
    payload: media
})


export const getMedia = (venueId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/venues/${venueId}/`);
        const data = res.json();
        dispatch(getMediaAction(data));
        return data;
    };
}


// (media, room_type, total_occupancy, summary, has_bar, has_kitchen, has_rooftop, has_heated_outdoor_seating, has_liquor, price, owner_id, created_at, update_at, has_beer, has_byob, has_outdoor_seating, name, twentyone_plus, kid_friendly, links, street_address, city, state )
export const createMedia = (data) => async (dispatch) => {
    const formData = new FormData()


    if (data.url) formData.append("file", data.url);
    formData.append("venue_id", data.venue_id)

    const res = await fetch(`/api/venues/media/`, {
        method: "POST",
        body: formData,
    });
    if (res.ok) {

        const data = await res.json()
    }

    // const res2 = await fetch('/api/venues', {
    //     method: "POST",
    //     body: formData
    // })

    // if (res2.ok) {
    //     const data = await res.json();
    // }
}


function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_MEDIA:
            return { ...state, venue: action.payload }


        //help 
        // media state not showing up in redux. Is the route i made in the backend wrong?
        // might need if (Object.keys(venue).length === 0) return null; in component rendering this if we get weird error
        //see venueInfo component index.js line 106 for an example
        case GET_MEDIA:
            const newObject = {};
            Object.values(action.payload).forEach(function (media) {
                newObject[media.id] = media;
            })
            return { ...newObject };
        default:
            return state;
    };
}

export default reducer;




