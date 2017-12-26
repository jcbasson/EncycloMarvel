import {connect} from 'react-redux';
import MarvelCharactersListContainer from './view/marvelCharactersListContainer';
import withInfiniteScroll from '../sharedHigherOrder/withInfiniteScroll';
import MarvelCharacterListActions from './actions/marvelCharacterListActions'

const mapStateToProps = (state) => {
    const {MarvelCharactersReducer} = state;
    let {numberOfBatchesRetrieved, marvelCharacterListViewed} = MarvelCharactersReducer;
    const marvelCharacters = numberOfBatchesRetrieved > 0 && marvelCharacterListViewed && marvelCharacterListViewed.marvelCharactersViewed? marvelCharacterListViewed.marvelCharactersViewed.toArray(): [];
    return {numberOfBatchesRetrieved, marvelCharacters, onScrollHandler};
};

const onScrollHandler = (scrollDetails, dispatch) =>
{
    dispatch(MarvelCharacterListActions.setViewedMarvelCharacterList());
};

const MarvelCharactersListComponent = connect(
    mapStateToProps
)(withInfiniteScroll(MarvelCharactersListContainer));

export default MarvelCharactersListComponent;