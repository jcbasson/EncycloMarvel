import MarvelCharacterInfoActionTypes from '../../marvelCharacterInfo/constants/marvelCharacterInfoActionTypes';

class MarvelCharacterInfoReducer{
    constructor()
    {
        this.actionTypeCategory =  MarvelCharacterInfoActionTypes.ACTION_CATEGORY;
    }
    reducerActions(state, action) {
        switch (action.type) {
            case MarvelCharacterInfoActionTypes.SET_VIEWED_CHARACTER:
                const currentlyViewedMarvelCharacter = getMarvelCharacterById(action.characterId, state.marvelCharacters);
                return createNextState(state, {
                    currentlyViewedMarvelCharacter
                });
            default:
                return state
        }
    }
}

const getMarvelCharacterById = (marvelCharacterId, marvelCharacters) => {
    return marvelCharacters.find((marvelCharacter) => {
        if(marvelCharacter.id == marvelCharacterId)return marvelCharacter;
    });
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const marvelCharacterInfoReducer = new MarvelCharacterInfoReducer();
export default marvelCharacterInfoReducer;