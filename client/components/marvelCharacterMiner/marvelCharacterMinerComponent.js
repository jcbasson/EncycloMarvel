import marvelCharacterMinerAction from './actions/marvelCharacterMinerActions'

class MarvelCharacterMinerComponent {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.currentOffset = 0;
        this.numberOfBatchesComplete = 0;
        this.totalNumberOfMarvelCharactersOnAPI = 0;
    }

    mine() {
        const {dispatch, currentOffset, batchMinedSuccessfullyHandler} = this;
        const {startMiningCharacters, getNextBatchOfCharacters} = marvelCharacterMinerAction;
        dispatch(startMiningCharacters());
        dispatch(getNextBatchOfCharacters(currentOffset, batchMinedSuccessfullyHandler.bind(this)))
    }

    batchMinedSuccessfullyHandler(currentTotalNumberOfMarvelCharacters, numberOfMarvelCharactersRetrieved) {

        console.log('currentTotalNumberOfMarvelCharacters : ', currentTotalNumberOfMarvelCharacters);
        console.log('numberOfMarvelCharactersRetrieved : ', numberOfMarvelCharactersRetrieved);

        const {dispatch} = this;
        const {firstBatchOfCharactersRetrieved, finishedMiningCharacters} = marvelCharacterMinerAction;

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