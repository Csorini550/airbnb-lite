import { fetch } from './csrf';
const initialState = {}

const CREATE_REVIEW = 'userReviews/createReview';
// const GET_REVIEWS = ""
// const DELETE_REVIEW = ""


const createReviewAction = (review) => ({
    type: CREATE_REVIEW,
    payload: review
});

export const getVenueReviews = (venueId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/reviews/${venueId}`);
        console.log(res.data, "data")
        dispatch(createReviewAction(res.data));
        return res.data;
    }
}

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

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_REVIEW:
            return { ...action.payload }
        default:
            return state;
    }
}

export default reducer;
