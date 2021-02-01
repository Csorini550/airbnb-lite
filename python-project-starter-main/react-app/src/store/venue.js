// import { fetch } from './csrf';
const initialState = {}

const CREATE_VENUE = 'venue/createVenue'
const GET_VENUE = 'venue/getVenue'
const GET_ALL_VENUES = 'venue/getAllVenues'
// conSt GET_ALL_VNUES = 'venu'

const createVenueAction = (venue) => ({
    type: CREATE_VENUE,
    payload: venue
})

const getAllVenuesAction = (body) => ({
    type: GET_ALL_VENUES,
    payload: body
});

const getVenueAction = (body) => ({
    type: GET_VENUE,
    payload: body
});

export const createVenueForm = (body) => {
    return async (dispatch) => {
        // const formData = new FormData()

        // if (body) formData.append("file", body);
        const res = await fetch(`/api/venues/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                body
            )
        })
        if (res.ok) {
            const data = await res.json()
            // dispatch(createVenueAction(data))
        }
    };
}

export const getVenue = (venueId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/venues/${venueId}/`);
        const data = res.json();
        dispatch(getVenueAction(data));
        return data;
    };
}

export const getAllVenues = () => {
    return async (dispatch) => {
        const res = await fetch(`/api/venues/`);
        const data = res.json();
        dispatch(getAllVenuesAction(data));
        console.log(data, "I'mDATA!!!1")
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


        // help
        //venue state for all venues isnt showing up in redux RIP
        // remember if you can get this to work but get weird error put 
        // see venueInfo component index.js line 106 for an example
        case GET_ALL_VENUES:
            let test;
            const newObj = {};
            Object.values(action.payload).forEach(function (venue) {
                newObj[venue.id] = venue;
            })
            return { ...newObj };
            return {}
        default:
            return state;
    };
}

export default reducer;
