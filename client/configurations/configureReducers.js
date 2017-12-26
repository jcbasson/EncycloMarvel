import {combineReducers} from 'redux';
import MarvelCharactersReducer from '../components/app/reducer/appReducer'


//Create combined reducers for app
const reducer = combineReducers({
    MarvelCharactersReducer
});

export default reducer;

