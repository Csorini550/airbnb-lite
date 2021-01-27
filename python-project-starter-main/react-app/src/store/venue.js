import { fetch } from './csrf';
const initialState = {}

const CREATE_VENUE = 'venue/createVenue'
const GET_VENUE = 'venu/getVenue'

const createVenueAction = (venue) => ({
    type: CREATE_VENUE,
    payload: venue
})

const getVenueAction = (venue) => ({
    type: GET_VENUE,
    payload: venue
})

export const createVenue = (body) => {
    return async (dispatch) => {
        const res = await fetch(`/api/venues`, {
            method: 'POST',
            body: JSON.stringify(
                body
            )
        })
        dispatch(createVenueAction(res.data))
    };
}

export const getVenue = (venueId) => {
    return async (dispatch) => {
        const res = await fetch(`api/venues/${venueId}`);
        dispatch(getVenueAction(res.data));
        return res.data
    };
}

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_VENUE:
            return { ...action.payload }
        case GET_VENUE:
            const newObject = {};
            action.payload.forEach(function (venue) {
                newObject[venue.id] = venue;
            })
            return newObject;
        default:
            return state;
    };
}

export default reducer;



