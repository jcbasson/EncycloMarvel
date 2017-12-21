class MarvelCharacterMinerReducer {
    constructor(Immutable, ActionTypes) {
        this.immutable = Immutable;
        this.actionTypes = ActionTypes;
    }

    miningMarvelCharacters
    (state, action) {
        const actionTypes = this.actionTypes;
        switch (action.type) {
            case actionTypes.GET_NEXT_BATCH_OF_CHARACTERS:
                return createNextState(state, {
                    totalNumberOfCharactersRetrieved: action.offset
                });
            case actionTypes.STARTED_MINING_CHARACTERS:
                return createNextState(state, {
                    isStartedMiningCharacters: action.isStartedMiningCharacters
                });
            case actionTypes.FIRST_BATCH_OF_CHARACTERS_RETRIEVED:
                return createNextState(state, {
                    isFirstBatchOfCharactersRetrieved: action.isFirstBatchOfCharactersRetrieved
                });
            case actionTypes.FINISHED_MINING_CHARACTERS:
                return createNextState(state, {
                    isStartedMiningCharacters: action.isStartedMiningCharacters,
                    isFinishedStartedMiningCharacters: action.isFinishedStartedMiningCharacters
                });
            case actionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
                let marvelCharacters = createNewMarvelCharactersList(state.marvelCharacters, action.marvelCharacters);
                return createNextState(state, {
                    marvelCharacters
                });
            case actionTypes.ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
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