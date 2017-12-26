import DefaultAppState from '../../../configurations/constants/defaultAppState';
import miningMarvelCharactersReducer from '../../marvelCharacterMiner/reducers/marvelCharacterMinerReducer';
import marvelCharacterInfoReducer from '../../marvelCharacterInfo/reducers/marvelCharacterInfoReducer';
import marvelCharacterListReducer from '../../marvelCharactersList/reducers/marvelCharacterListReducer';


const MarvelCharactersReducer = (state = DefaultAppState, action) => {
    switch (action.category) {
        case miningMarvelCharactersReducer.actionTypeCategory:
            return miningMarvelCharactersReducer.reducerActions(state, action);
        case marvelCharacterInfoReducer.actionTypeCategory:
            return marvelCharacterInfoReducer.reducerActions(state, action);
        case marvelCharacterListReducer.actionTypeCategory:
            return marvelCharacterListReducer.reducerActions(state, action);
        default:
            return state
    }
};

export default MarvelCharactersReducer;