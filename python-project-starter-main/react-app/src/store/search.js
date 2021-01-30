import { fetch } from './csrf';
const initialState = {}

const SET_SEARCHED_VENUES = 'venueSearch/setVenueSearch';

const searchVenuesAction = (results) => ({
    type: SET_SEARCHED_VENUES,
    payload: results
});


export const pictureSearch = (searchTerm) => {
    return async (dispatch) => {
        const res = await fetch(`/api/results/${searchTerm}`)
        console.log(res.data)
        dispatch(
            searchVenuesAction(res.data)
        );
    };
};

export const searchByState = (searchTerm) => {
    return async (dispatch) => {
        const res = await fetch(`/api/results/${searchTerm}`)
        dispatch(
            searchVenuesAction(res.data)
        )
    }
}

export const search = (search) => {
    const { location, date, time, guestCount } = search
    return async (dispatch) => {
        let res = await fetch('/api/results/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                location: location,
                date: date,
                time: time,
                guest_count: guestCount
            })
        })
        dispatch(searchVenuesAction(res.data))
    }
};

export const noSearch = () => {
    return async (dispatch) => {
        const res = await fetch(`/api/venues/`)
        console.log(res.data)
        dispatch(
            searchVenuesAction(res.data)
        );
    };
};


function reducer(state = initialState, action) {
    console.log(action)
    let newState;
    switch (action.type) {
        case SET_SEARCHED_VENUES:
            return { ...action.payload }
        default:
            return state;
    }
}

export default reducer;

