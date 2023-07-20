// import {createStore} from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer)

// export default store;

import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './reducer';
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ||  compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store;