const initialState = {};

const CREATE_REVIEW = "reviews/createReview";

// Action Creator
const createReviewAction = (review) => ({
    type: CREATE_REVIEW,
    payload: review,
});

// Thunk Action Creator
export const createReview = (body) => {
    return async (dispatch) => {
        // Make server call
        const result = await fetch("/api/reviews", {
            method: "POST",
            body: JSON.stringify(
                body
            ),
        });
        if (result.ok) {
            const review = await result.json();
            dispatch(createReviewAction(review));
        }
    };
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_REVIEW:
            return {...action.payload} // payload from Action Creator
        default:
            return state;
    }
};

export default reducer;
