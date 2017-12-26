import MarvelCharacterMinerActionTypes from '../constants/marvelCharacterMinerActionTypes';

class MiningMarvelCharactersReducer{
    constructor()
    {
        this.actionTypeCategory =  MarvelCharacterMinerActionTypes.ACTION_CATEGORY;
    }
    reducerActions(state, action){
        switch (action.type) {
            case MarvelCharacterMinerActionTypes.GET_NEXT_BATCH_OF_CHARACTERS:
                return createNextState(state, {
                    totalNumberOfCharactersRetrieved: action.offset
                });
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
                return createNextState(state, {
                    marvelCharacters,
                    numberOfBatchesRetrieved: state.numberOfBatchesRetrieved + 1
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

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const miningMarvelCharactersReducer = new MiningMarvelCharactersReducer();
export default miningMarvelCharactersReducer;