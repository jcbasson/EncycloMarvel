import marvelCharacterMinerActionTypes from '../actions/marvelCharacterMinerActions';

export const marvelCharacterMinerEpic = (action$, store, {marvelCharacterService, Observable, marvelCharacterMinerComponent}) => {

    const startMiningCharactersActionType = marvelCharacterMinerActionTypes.getNextBatchOfCharacters().type;
    return action$.ofType(startMiningCharactersActionType).mergeMap((action) => {
        const {getNextBatchOfCharactersCallbackFunc, offset} = action;
        return Observable.fromPromise(marvelCharacterService.fetchCharacters(offset))
            .map(result => {
                const {totalNumberOfMarvelCharactersOnAPI, marvelCharacters} = result;
                //Notify Marvel Character Miner, had to do this because of referencing issue with "this" when calling this method from the epic
                getNextBatchOfCharactersCallbackFunc(marvelCharacterMinerComponent, totalNumberOfMarvelCharactersOnAPI, marvelCharacters.length);

                //Update state with new marvel characters
                return marvelCharacterMinerActionTypes.successRetrievingNextBatchOfCharacters(marvelCharacters)
            }).catch(error =>
                (marvelCharacterMinerActionTypes.errorRetrievingNextBatchOfCharacters(error))
            );
    })
};