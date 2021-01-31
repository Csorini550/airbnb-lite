import { fetch } from './csrf.js';

const initialState = {};


const CREATE_RESERVATION = "reservations/createReservation";
const GET_RESERVATION = "reservation/getReservation";

const createReservationAction = (reservation) => ({
    type: CREATE_RESERVATION,
    payload: reservation
})

const getReservationAction = (reservation) => ({
    type: GET_RESERVATION,
    payload: reservation
});

export const createReservation = (body) => {
    return async (dispatch) => {
        const res = await fetch(`/api/reservations/`, {
            method: "POST",
            body: JSON.stringify(
                body
            )
        })
        dispatch(createReservationAction(res.data))
    }
}

export const getReservation = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/reservations/users/${userId}`);
        // const data = res.data;
        dispatch(getReservationAction(res.data));
        return res.data;
    };
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_RESERVATION:
            return { ...state, [action.payload.id]: action.payload };
        case GET_RESERVATION:
            const newObj = {};
            Object.values(action.payload).forEach(function (reservation) {
                newObj[reservation.id] = reservation;
            })
            // return {...state, [action.payload.id]: action.payload};
            return { ...newObj };
        default:
            return state;
    }
}

export default reducer;
