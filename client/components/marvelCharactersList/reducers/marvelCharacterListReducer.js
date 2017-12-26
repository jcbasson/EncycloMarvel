import MarvelCharacterListActionTypes from '../../marvelCharactersList/constants/marvelCharacterListActionTypes';

class MarvelCharacterListReducer{
    constructor()
    {
        this.actionTypeCategory =  MarvelCharacterListActionTypes.ACTION_CATEGORY;
    }
    reducerActions(state, action) {
        switch (action.type) {
            case MarvelCharacterListActionTypes.SET_VIEWED_CHARACTER_LIST:
                return createNextState(state, {
                    marvelCharacterListViewed:  setMarvelCharacterListViewed(state.marvelCharacterListViewed, state.marvelCharacters)
                });
            default:
                return state
        }
    }
}

const setMarvelCharacterListViewed =  (marvelCharacterListViewed, allMarvelCharacters) => {
    let {marvelCharactersViewed, count, countPerPage} =  marvelCharacterListViewed;
    const allMarvelCharactersSize = allMarvelCharacters.size;
    let nextOffset = calculateNextOffset(count, allMarvelCharactersSize);
    count += nextOffset >= countPerPage? countPerPage:nextOffset;
    if(count <= allMarvelCharactersSize)
    {
        marvelCharactersViewed = allMarvelCharacters.slice(0,count);
    }
    return {count, marvelCharactersViewed};
};

const calculateNextOffset = (count, allMarvelCharactersSize) => {

    return allMarvelCharactersSize - count;
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const marvelCharacterListReducer = new MarvelCharacterListReducer();
export default marvelCharacterListReducer;