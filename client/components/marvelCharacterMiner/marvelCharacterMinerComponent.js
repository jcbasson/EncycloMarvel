import marvelCharacterMinerAction from './actions/marvelCharacterMinerActions'

class MarvelCharacterMinerComponent {
    constructor() {
        this.currentOffset = 0;
        this.numberOfBatchesComplete = 0;
        this.totalNumberOfMarvelCharactersOnAPI = 0;
    }

    setDispatcher(dispatch)
    {
        this.dispatch = dispatch;
    }

    mine() {
        const {dispatch, currentOffset} = this;
        const {startMiningCharacters, getNextBatchOfCharacters} = marvelCharacterMinerAction;
        dispatch(startMiningCharacters());
        dispatch(getNextBatchOfCharacters(currentOffset, this.batchMinedSuccessfullyHandler.bind(this)))
    }

    batchMinedSuccessfullyHandler(marvelCharacterMinerComponent, currentTotalNumberOfMarvelCharacters, numberOfMarvelCharactersRetrieved) {

        const {firstBatchOfCharactersRetrieved, finishedMiningCharacters} = marvelCharacterMinerAction;

        marvelCharacterMinerComponent.numberOfBatchesComplete++;
        marvelCharacterMinerComponent.currentOffset += numberOfMarvelCharactersRetrieved;
        marvelCharacterMinerComponent.totalNumberOfMarvelCharactersOnAPI = currentTotalNumberOfMarvelCharacters;

        if(marvelCharacterMinerComponent.numberOfBatchesComplete === 1)marvelCharacterMinerComponent.dispatch(firstBatchOfCharactersRetrieved());

        if ( marvelCharacterMinerComponent.currentOffset < marvelCharacterMinerComponent.totalNumberOfMarvelCharactersOnAPI) {
            marvelCharacterMinerComponent.mine();
        }
        else {
            marvelCharacterMinerComponent.dispatch(finishedMiningCharacters());
        }
    }
}

const marvelCharacterMinerComponent = new MarvelCharacterMinerComponent();
export default marvelCharacterMinerComponent;