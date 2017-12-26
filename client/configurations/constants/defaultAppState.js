import immutable from 'immutable';

const DefaultAppState = {
    marvelCharacters: immutable.fromJS([]),
    numberOfBatchesRetrieved: 0,
    totalNumberOfCharactersRetrieved: 0,
    isStartedMiningCharacters: false,
    isFinishedStartedMiningCharacters: false,
    marvelCharacterListViewed: {count: 100, marvelCharactersViewed: immutable.fromJS([]), countPerPage: 100},
    errorPayload: null
};
export default DefaultAppState;