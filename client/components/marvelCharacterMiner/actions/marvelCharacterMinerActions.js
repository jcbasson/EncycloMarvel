class MarvelCharacterMinerActions {
    constructor(ActionTypes) {
        this.actionTypes = ActionTypes;
    }

    getNextBatchOfCharacters(offset, getNextBatchOfCharactersCallbackFunc) {
        return {
            type: this.actionTypes.GET_NEXT_BATCH_OF_CHARACTERS,
            getNextBatchOfCharactersCallbackFunc,
            offset
        }
    }

    startMiningCharacters() {
        return {
            type: this.actionTypes.STARTED_MINING_CHARACTERS,
            isStartedMiningCharacters: true
        }
    }

    successRetrievingNextBatchOfCharacters(marvelCharacters) {
        return {
            type: this.actionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS,
            marvelCharacters
        }
    }

    firstBatchOfCharactersRetrieved() {
        return {
            type: this.actionTypes.FIRST_BATCH_OF_CHARACTERS_RETRIEVED,
            isFirstBatchOfCharactersRetrieved: true
        }
    }

    finishedMiningCharacters() {
        return {
            type: this.actionTypes.FINISHED_MINING_CHARACTERS,
            isStartedMiningCharacters: false,
            isFinishedStartedMiningCharacters: true
        }
    }

    errorRetrievingNextBatchOfCharacters(errorPayload)
    {
        return {
            type: this.actionTypes.ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS,
            isStartedMiningCharacters: false,
            isFinishedStartedMiningCharacters: false,
            errorPayload
        }
    }
}
export default MarvelCharacterMinerActions;

