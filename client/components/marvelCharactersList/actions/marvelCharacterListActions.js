import MarvelCharacterListActionTypes from '../constants/marvelCharacterListActionTypes';

class MarvelCharacterListActions {

    setViewedMarvelCharacterList() {
        return {
            category: MarvelCharacterListActionTypes.ACTION_CATEGORY,
            type: MarvelCharacterListActionTypes.SET_VIEWED_CHARACTER_LIST
        }
    }
}
const marvelCharacterListActions = new MarvelCharacterListActions();
export default marvelCharacterListActions;
