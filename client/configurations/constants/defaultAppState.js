import immutable from 'immutable';

const DefaultAppState = {
    marvelCharacters: immutable.fromJS([]),
    numberOfBatchesRetrieved: 0,
    totalNumberOfCharactersRetrieved: 0,
    isStartedMiningCharacters: false,
    isFinishedStartedMiningCharacters: false,
    marvelCharacterListViewed: {maxCount: 100, marvelCharactersViewed: immutable.fromJS([]), offset: 0},
    errorPayload: null
};
export default DefaultAppState;