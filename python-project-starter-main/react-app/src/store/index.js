import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import session from './session';
import thunk from 'redux-thunk';
import VenueReviews from './VenueReviews';
import search from './search';
import review from './reviews'; // Can name whatever since its default export
import venue from './venue'
import media from './media'

const rootReducer = combineReducers({
    session,
    VenueReviews,
    search,
    venue,
    review,
    media
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
