import {connect} from 'react-redux';
import MarvelCharactersListContainer from './view/marvelCharactersListContainer';
import withInfiniteScroll from '../sharedHigherOrder/withInfiniteScroll';

const mapStateToProps = (state) => {
    const {MarvelCharactersReducer} = state;
    let {numberOfBatchesRetrieved, marvelCharacterListViewed} = MarvelCharactersReducer;
    const marvelCharacters = numberOfBatchesRetrieved > 0 && marvelCharacterListViewed && marvelCharacterListViewed.marvelCharactersViewed? marvelCharacterListViewed.marvelCharactersViewed.toArray(): [];
    return {numberOfBatchesRetrieved, marvelCharacters, onScrollHandler};
};

const onScrollHandler = () =>
{
    console.log('Scroll happened');
};

const MarvelCharactersListComponent = connect(
    mapStateToProps
)(withInfiniteScroll(MarvelCharactersListContainer));

export default MarvelCharactersListComponent;