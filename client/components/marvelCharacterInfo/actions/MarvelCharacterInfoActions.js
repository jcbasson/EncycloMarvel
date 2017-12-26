import MarvelCharacterInfoActionTypes from '../constants/marvelCharacterInfoActionTypes';

class MarvelCharacterInfoActions {

    setViewedMarvelCharacter(characterId) {
        return {
            category: MarvelCharacterInfoActionTypes.ACTION_CATEGORY,
            type: MarvelCharacterInfoActionTypes.SET_VIEWED_CHARACTER,
            characterId
        }
    }
}
const marvelCharacterInfoActions = new MarvelCharacterInfoActions();
export default marvelCharacterInfoActions;
