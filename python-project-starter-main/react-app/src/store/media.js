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




// (media, room_type, total_occupancy, summary, has_bar, has_kitchen, has_rooftop, has_heated_outdoor_seating, has_liquor, price, owner_id, created_at, update_at, has_beer, has_byob, has_outdoor_seating, name, twentyone_plus, kid_friendly, links, street_address, city, state )
export const createMedia = (media) => async (dispatch) => {

    const formData = new FormData()


    if (media) formData.append("file", media);
    formData.append("venue_id", 1)

    const res = await fetch(`/api/venues/media`, {
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




