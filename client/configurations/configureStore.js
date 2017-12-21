import {createStore, applyMiddleware} from 'redux'
import reduxCatch from 'redux-catch';
import reducer from './configureReducers';
import {epicMiddleware, loggerMiddleware}  from './configureMiddelware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    return createStore(reducer, preloadedState, composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            loggerMiddleware,
            reduxCatch
        )
    ));
}

