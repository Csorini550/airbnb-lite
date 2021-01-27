// import { fetch } from './csrf.js';


// const CREATE_RESERVATION = "reservations/createReservation"

// const createReservationAction = (reservation) => ({
//     type: CREATE_RESERVATION,
//     payload: reservation
// })

// const createReservation = (body) => {
//     return async (dispatch) => {
//         const res = await fetch(`/api/reservations`, {
//             method: "POST",
//             body: JSON.stringify(
//                 body
//             )
//         })
//         dispatch(createReservation(res.data))
//     }
// }


// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case CREATE_RESERVATION:
//             return { ...state, [action.payload.id]: action.payload }
//         default:
//             return state;
//     }
// }

// export default reducer;