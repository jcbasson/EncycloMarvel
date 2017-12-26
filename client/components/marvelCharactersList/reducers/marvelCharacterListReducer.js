import MarvelCharacterListActionTypes from '../../marvelCharacterInfo/constants/marvelCharacterInfoActionTypes';

class MarvelCharacterListReducer{
    constructor()
    {
        this.actionTypeCategory =  MarvelCharacterListActionTypes.ACTION_CATEGORY;
    }
    reducerActions(state, action) {
        switch (action.type) {
            case MarvelCharacterListActionTypes.SET_VIEWED_CHARACTER_LIST:
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

const marvelCharacterListReducer = new MarvelCharacterListReducer();
export default marvelCharacterListReducer;