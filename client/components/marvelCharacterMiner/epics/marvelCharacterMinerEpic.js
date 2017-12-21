export const marvelCharacterMinerEpic = (action$, store, {marvelCharacterService, Observable, actions}) => {
    const {marvelCharacterMinerActions} = actions;
    const startMiningCharactersActionType = marvelCharacterMinerActions.getNextBatchOfCharacters().type;
    return action$.ofType(startMiningCharactersActionType).mergeMap((action) => {

        const {getNextBatchOfCharactersCallbackFunc, offset} = action;
        return Observable.fromPromise(marvelCharacterService.fetchCharacters(offset))
            .map(response => {

                const {totalNumberOfMarvelCharactersOnAPI, marvelCharacters} = extractDataFromResponse(response);
                getNextBatchOfCharactersCallbackFunc(totalNumberOfMarvelCharactersOnAPI, marvelCharacters.length);

                marvelCharacterMinerActions.successRetrievingNextBatchOfCharacters(marvelCharacters)
            }).catch(error =>
                (marvelCharacterMinerActions.errorRetrievingNextBatchOfCharacters(error))
            );
    })
};

const extractDataFromResponse = (response) => {
    const {data} = response;
    if(!data) return null;
    const {total, results} = data;
    return {totalNumberOfMarvelCharactersOnAPI: total? total: 0, marvelCharacters: results? results: []}
};