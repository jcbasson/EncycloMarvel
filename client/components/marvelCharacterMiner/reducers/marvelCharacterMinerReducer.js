import MarvelCharacterMinerActionTypes from '../constants/marvelCharacterMinerActionTypes';

class MiningMarvelCharactersReducer {
    constructor() {
        this.actionTypeCategory = MarvelCharacterMinerActionTypes.ACTION_CATEGORY;
    }

    reducerActions(state, action) {
        switch (action.type) {
            case MarvelCharacterMinerActionTypes.GET_NEXT_BATCH_OF_CHARACTERS:
                return state;
            case MarvelCharacterMinerActionTypes.STARTED_MINING_CHARACTERS:
                return createNextState(state, {
                    isStartedMiningCharacters: action.isStartedMiningCharacters
                });
            case MarvelCharacterMinerActionTypes.FINISHED_MINING_CHARACTERS:
                return createNextState(state, {
                    isStartedMiningCharacters: action.isStartedMiningCharacters,
                    isFinishedStartedMiningCharacters: action.isFinishedStartedMiningCharacters
                });
            case MarvelCharacterMinerActionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
                const marvelCharacters = createNewMarvelCharactersList(state.marvelCharacters, action.marvelCharacters);
                const numberOfBatchesRetrieved = state.numberOfBatchesRetrieved + 1;
                return createNextState(state, {
                    marvelCharacters,
                    numberOfBatchesRetrieved,
                    totalNumberOfCharactersRetrieved: marvelCharacters.size,
                    marvelCharacterListViewed: numberOfBatchesRetrieved === 1 ? setMarvelCharacterListViewed(state.marvelCharacterListViewed, marvelCharacters) : state.marvelCharacterListViewed
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
}

const createNewMarvelCharactersList = (existingMarvelCharacters, newMarvelCharacters) => {
    return existingMarvelCharacters.concat(newMarvelCharacters);
};

const setMarvelCharacterListViewed = (marvelCharacterListViewed, allMarvelCharacters) => {
    const {count} = marvelCharacterListViewed;
    const marvelCharactersViewed = allMarvelCharacters.slice(0, count);
    return createNextState(marvelCharacterListViewed,{count, marvelCharactersViewed});
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const miningMarvelCharactersReducer = new MiningMarvelCharactersReducer();
export default miningMarvelCharactersReducer;