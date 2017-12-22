import MarvelCharacterMinerActionTypes from '../constants/marvelCharacterMinerActionTypes';
import MarvelCharacterInfoActionTypes from '../../marvelCharacterInfo/constants/marvelCharacterInfoActionTypes';
import DefaultAppState from '../constants/defaultAppState'


const miningMarvelCharacters = (state, action) => {
    switch (action.type) {
        case MarvelCharacterMinerActionTypes.GET_NEXT_BATCH_OF_CHARACTERS:
            return createNextState(state, {
                totalNumberOfCharactersRetrieved: action.offset
            });
        case MarvelCharacterMinerActionTypes.STARTED_MINING_CHARACTERS:
            return createNextState(state, {
                isStartedMiningCharacters: action.isStartedMiningCharacters
            });
        case MarvelCharacterMinerActionTypes.FIRST_BATCH_OF_CHARACTERS_RETRIEVED:
            return createNextState(state, {
                isFirstBatchOfCharactersRetrieved: action.isFirstBatchOfCharactersRetrieved
            });
        case MarvelCharacterMinerActionTypes.FINISHED_MINING_CHARACTERS:
            return createNextState(state, {
                isStartedMiningCharacters: action.isStartedMiningCharacters,
                isFinishedStartedMiningCharacters: action.isFinishedStartedMiningCharacters
            });
        case MarvelCharacterMinerActionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
            const marvelCharacters = createNewMarvelCharactersList(state.marvelCharacters, action.marvelCharacters);
            return createNextState(state, {
                marvelCharacters
            });
        case MarvelCharacterMinerActionTypes.ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
            return createNextState(state, {
                isStartedMiningCharacters: action.isStartedMiningCharacters,
                isFinishedStartedMiningCharacters: action.isFinishedStartedMiningCharacters,
                errorPayload: action.errorPayload
            });
        default:
            return state
    }
};

const viewingMarvelCharacters = (state, action) => {
    switch (action.type) {
        case MarvelCharacterInfoActionTypes.SET_VIEWED_CHARACTER:
            const currentlyViewedMarvelCharacter = getMarvelCharacterById(action.characterId, state.marvelCharacters);
            return createNextState(state, {
                currentlyViewedMarvelCharacter
            });
        default:
            return state
    }
};

const createNewMarvelCharactersList = (existingMarvelCharacters, newMarvelCharacters) => {
    return [...existingMarvelCharacters, ...newMarvelCharacters];
};

const getMarvelCharacterById = (marvelCharacterId, marvelCharacters) => {
    //TODO: Implement immutable.js to optimize things like this
    for (let i = 0; i < marvelCharacters.length; i++) {
        const currentMarvelCharacter = marvelCharacters[i];
        if (currentMarvelCharacter.id == marvelCharacterId) return currentMarvelCharacter;
    }
    return null;
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const MarvelCharactersReducer = (state = DefaultAppState, action) => {
    switch (action.type) {
        case MarvelCharacterMinerActionTypes.GET_NEXT_BATCH_OF_CHARACTERS:
        case MarvelCharacterMinerActionTypes.STARTED_MINING_CHARACTERS:
        case MarvelCharacterMinerActionTypes.FIRST_BATCH_OF_CHARACTERS_RETRIEVED:
        case MarvelCharacterMinerActionTypes.FINISHED_MINING_CHARACTERS:
        case MarvelCharacterMinerActionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
        case MarvelCharacterMinerActionTypes.ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
            return miningMarvelCharacters(state, action);
        case MarvelCharacterInfoActionTypes.SET_VIEWED_CHARACTER:
            return viewingMarvelCharacters(state, action);
        default:
            return state
    }
};

export default MarvelCharactersReducer;