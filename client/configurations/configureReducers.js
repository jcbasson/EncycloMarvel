import {combineReducers} from 'redux';
import immutable from 'immutable'
import DefaultAppState from './constants/defaultAppState';
import AppReducer from '../components/app/reducer/appReducer';
import MarvelCharacterMinerReducer from '../components/marvelCharacterMiner/reducers/marvelCharacterMinerReducer'

//Create Marvel Character Miner Reducer
const marvelCharacterMinerReducer = new MarvelCharacterMinerReducer(immutable);

//Create Application Reducer
const appReducer = new AppReducer(immutable,DefaultAppState, marvelCharacterMinerReducer);


//Create combined reducers for app
const reducer = combineReducers({
    appReducer
});

export default reducer;

