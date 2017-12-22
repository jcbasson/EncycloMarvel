import {combineReducers} from 'redux';
import MarvelCharactersReducer from '../components/marvelCharacterMiner/reducers/marvelCharacterMinerReducer'


//Create combined reducers for app
const reducer = combineReducers({
    MarvelCharactersReducer
});

export default reducer;

