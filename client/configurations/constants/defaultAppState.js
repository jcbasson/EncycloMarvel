import immutable from 'immutable';

const DefaultAppState = {
    marvelCharacters: immutable.fromJS([]),
    numberOfBatchesRetrieved: 0,
    totalNumberOfCharactersRetrieved: 0,
    isStartedMiningCharacters: false,
    isFinishedStartedMiningCharacters: false,
    errorPayload: null
};
export default DefaultAppState;