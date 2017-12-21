import MarvelCharacterMinerActionTypes from '../constants/marvelCharacterMinerActionTypes'

class MarvelCharacterMinerReducer {
    constructor(Immutable) {
        this.immutable = Immutable;
        this.actionTypes = MarvelCharacterMinerActionTypes;
    }

    miningMarvelCharacters(state, action) {
       
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
                let marvelCharacters = createNewMarvelCharactersList(state.marvelCharacters, action.marvelCharacters);
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
    }
}

const createNewMarvelCharactersList = (existingMarvelCharacters, newMarvelCharacters) => {

    return [...existingMarvelCharacters, newMarvelCharacters];
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

export default MarvelCharacterMinerReducer;