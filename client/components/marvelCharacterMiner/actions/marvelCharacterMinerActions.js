import MarvelCharacterMinerActionTypes from '../constants/marvelCharacterMinerActionTypes';

class MarvelCharacterMinerActions {

    getNextBatchOfCharacters(offset, getNextBatchOfCharactersCallbackFunc) {
        return {
            type: MarvelCharacterMinerActionTypes.GET_NEXT_BATCH_OF_CHARACTERS,
            getNextBatchOfCharactersCallbackFunc,
            offset
        }
    }

    startMiningCharacters() {
        return {
            type: MarvelCharacterMinerActionTypes.STARTED_MINING_CHARACTERS,
            isStartedMiningCharacters: true
        }
    }

    successRetrievingNextBatchOfCharacters(marvelCharacters) {
        return {
            type: MarvelCharacterMinerActionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS,
            marvelCharacters
        }
    }

    firstBatchOfCharactersRetrieved() {
        return {
            type: MarvelCharacterMinerActionTypes.FIRST_BATCH_OF_CHARACTERS_RETRIEVED,
            isFirstBatchOfCharactersRetrieved: true
        }
    }

    finishedMiningCharacters() {
        return {
            type: MarvelCharacterMinerActionTypes.FINISHED_MINING_CHARACTERS,
            isStartedMiningCharacters: false,
            isFinishedStartedMiningCharacters: true
        }
    }

    errorRetrievingNextBatchOfCharacters(errorPayload)
    {
        return {
            type: MarvelCharacterMinerActionTypes.ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS,
            isStartedMiningCharacters: false,
            isFinishedStartedMiningCharacters: false,
            errorPayload
        }
    }
}
const marvelCharacterMinerAction = new MarvelCharacterMinerActions;
export default marvelCharacterMinerAction;

