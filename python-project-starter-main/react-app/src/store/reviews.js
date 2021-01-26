// import { fetch } from './csrf';

// const SET_USER_REVIEWS = 'userReviews/setUserReviews';

// const initialState = {userReviews: []};

// const setUserReviews = (review) => {
//     type: SET_USER_REVIEWS;
//     payload: review;
// };

// export const createReview = () => async (dispatch) => {
//     const res = await fetch('/api/reviews', {
//         method: 'POST',
//         body: JSON.stringify({
//             user_id: user_id,
//             reservation_id: reservation_id,
//             venue_id: venue_id,
//             rating: rating,
//             comment: comment,
//         }),
//     });

//     dispatch(setUserReviews(res));
//     return res;
// };

// function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     case SET_USER_REVIEWS:
//       newState = Object.assign({}, state, { userReviews: action.payload });
//       return newState;
//     default:
//       return state;
//   }
// }

// export default reducer;
