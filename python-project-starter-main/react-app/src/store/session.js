import { fetch } from './csrf.js';
// import { login, signup, logout } from "../services/auth.js"

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER
});

export const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    console.log(res.data, "USER RES DATA")
    // dispatch(setUser(res.data.user));
    return res;
};

export const restoreUser = () => async (dispatch) => {
    const res = await fetch('/api/auth/');
    dispatch(setUser(res.data.user));
    return res;
};

export const signup = (user) => async (dispatch) => {
    const { email, password, first_name, last_name, phone_number, description, profile_image, business_owner } = user;
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            first_name,
            last_name,
            phone_number,
            description,
            profile_image,
            business_owner
        })
    });

    dispatch(setUser(response.data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await fetch('/api/auth/logout', {
        method: 'DELETE'
    });
    dispatch(removeUser());
    return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state, { user: action.payload });
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state, { user: null });
            return newState;
        default:
            return state;
    }
}

export default reducer;
