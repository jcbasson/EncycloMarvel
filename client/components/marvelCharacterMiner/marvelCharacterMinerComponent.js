class MarvelCharacterMinerComponent {
    constructor(dispatch, actions) {
        this.dispatch = dispatch;
        this.actions = actions;
        this.currentOffset = 0;
        this.numberOfBatchesComplete = 0;
        this.totalNumberOfMarvelCharactersOnAPI = 0;
    }

    mine() {
        const {dispatch, actions, currentOffset, batchMinedSuccessfullyHandler} = this;
        const {startMiningCharacters, getNextBatchOfCharacters} = actions;
        dispatch(startMiningCharacters());
        dispatch(getNextBatchOfCharacters(currentOffset, batchMinedSuccessfullyHandler))
    }

    batchMinedSuccessfullyHandler(currentTotalNumberOfMarvelCharacters, numberOfMarvelCharactersRetrieved) {

        console.log('currentTotalNumberOfMarvelCharacters : ', currentTotalNumberOfMarvelCharacters);
        console.log('numberOfMarvelCharactersRetrieved : ', numberOfMarvelCharactersRetrieved);

        const {dispatch, actions} = this;
        const {firstBatchOfCharactersRetrieved, finishedMiningCharacters} = actions;

        this.numberOfBatchesComplete++;
        this.currentOffset += numberOfMarvelCharactersRetrieved;
        this.totalNumberOfMarvelCharactersOnAPI = currentTotalNumberOfMarvelCharacters;

        if(this.numberOfBatchesComplete === 1)dispatch(firstBatchOfCharactersRetrieved());

        if ( this.currentOffset < this.totalNumberOfMarvelCharactersOnAPI) {
            this.mine();
        }
        else {
            dispatch(finishedMiningCharacters());
        }
    }
}
export default MarvelCharacterMinerComponent;