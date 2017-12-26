import MarvelCharacterMinerActionTypes from '../constants/marvelCharacterMinerActionTypes';

class MarvelCharacterMinerActions {

    getNextBatchOfCharacters(offset, getNextBatchOfCharactersCallbackFunc) {
        return {
            category: MarvelCharacterMinerActionTypes.ACTION_CATEGORY,
            type: MarvelCharacterMinerActionTypes.GET_NEXT_BATCH_OF_CHARACTERS,
            getNextBatchOfCharactersCallbackFunc,
            offset
        }
    }

    startMiningCharacters() {
        return {
            category: MarvelCharacterMinerActionTypes.ACTION_CATEGORY,
            type: MarvelCharacterMinerActionTypes.STARTED_MINING_CHARACTERS,
            isStartedMiningCharacters: true
        }
    }

    successRetrievingNextBatchOfCharacters(marvelCharacters) {
        return {
            category: MarvelCharacterMinerActionTypes.ACTION_CATEGORY,
            type: MarvelCharacterMinerActionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS,
            marvelCharacters
        }
    }

    finishedMiningCharacters() {
        return {
            category: MarvelCharacterMinerActionTypes.ACTION_CATEGORY,
            type: MarvelCharacterMinerActionTypes.FINISHED_MINING_CHARACTERS,
            isStartedMiningCharacters: false,
            isFinishedStartedMiningCharacters: true
        }
    }

    errorRetrievingNextBatchOfCharacters(errorPayload)
    {
        return {
            category: MarvelCharacterMinerActionTypes.ACTION_CATEGORY,
            type: MarvelCharacterMinerActionTypes.ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS,
            isStartedMiningCharacters: false,
            isFinishedStartedMiningCharacters: false,
            errorPayload
        }
    }
}
const marvelCharacterMinerAction = new MarvelCharacterMinerActions();
export default marvelCharacterMinerAction;

