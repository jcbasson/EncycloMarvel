import {combineReducers} from 'redux';
import MiningMarvelCharactersReducer from '../components/marvelCharacterMiner/reducers/marvelCharacterMinerReducer'


//Create combined reducers for app
const reducer = combineReducers({
    MiningMarvelCharactersReducer
});

export default reducer;

