import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import session from './session';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import VenueReviews from './VenueReviews';
import search from './search';
import review from './reviews'; // Can name whatever since its default export
import venue from './venue';
import media from './media';
import reservations from './reservation';

const rootReducer = combineReducers({
    session,
    VenueReviews,
    reservations,
    search,
    venue,
    review,
    media
});

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

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
    let store = createStore(persistedReducer, preloadedState, enhancer);
    let persistor = persistStore(store)
    return { store, persistor }
};

export default configureStore;


