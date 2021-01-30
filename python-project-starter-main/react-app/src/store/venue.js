import { fetch } from './csrf';
const initialState = {}

const CREATE_VENUE = 'venue/createVenue'
const GET_VENUE = 'venu/getVenue'
// conSt GET_ALL_VNUES = 'venu'

const createVenueAction = (venue) => ({
    type: CREATE_VENUE,
    payload: venue
})

const getVenueAction = (body) => ({
    type: GET_VENUE,
    payload: body
});

export const createVenue = (
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
    // owner_id,
    created_at,
    update_at,
    has_beer,
    has_byob,
    has_outdoor_seating,
    name,
    twentyone_plus,
    kid_friendly,
    links,
    street_address,
    city,
    state) => async (dispatch) => {

    const formData = new FormData();

    formData.append("type", type);
    formData.append("room_type", room_type);
    formData.append("total_occupancy", total_occupancy);
    formData.append("summary", summary);
    formData.append("has_bar", has_bar);
    formData.append("has_kitchen", has_kitchen);
    formData.append("has_rooftop", has_rooftop);
    formData.append("has_heated_outdoor_seating", has_heated_outdoor_seating);
    formData.append("has_liquor", has_liquor);
    formData.append("price", price);
    // formData.append("owner_id", owner_id);
    formData.append("created_at", created_at);
    formData.append("update_at", update_at);
    formData.append("has_beer", has_beer);
    formData.append("has_byob", has_byob);
    formData.append("has_outdoor_seating", has_outdoor_seating);
    formData.append("name", name);
    formData.append("twentyone_plus", twentyone_plus);
    formData.append("kid_friendly", kid_friendly);
    formData.append("links", links);
    formData.append("street_address", street_address);
    formData.append("city", city);
    formData.append("state", state);

    const res = await fetch(`/api/venues`, {
        method: 'POST',
        body: formData,
    })
    await dispatch(createVenueAction(res.data))
};

export const getVenue = (venueId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/venues/${venueId}`);
        const data = res.data
        dispatch(getVenueAction(data));
        return data;
    };
}

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_VENUE:
            return { ...action.payload }
        case GET_VENUE:
            const newObject = {};
            Object.values(action.payload).forEach(function (venue) {
                newObject[venue.id] = venue;
            })
            return { ...newObject };
        default:
            return state;
    };
}

export default reducer;



