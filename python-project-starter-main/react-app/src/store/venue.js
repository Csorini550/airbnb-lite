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

export const createVenueForm = (body) => {
    return async (dispatch) => {
        const res = await fetch(`/api/venues`, {
            method: 'POST',
            body: JSON.stringify(
                body
            )
        })
        if (res.ok) {
            dispatch(createVenueAction(res.data))
        }
    };
}

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
