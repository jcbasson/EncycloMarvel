import {connect} from 'react-redux';
import MarvelCharactersListContainer from './view/marvelCharactersListContainer';

const mapStateToProps = (state) => {
    const {MarvelCharactersReducer} = state;
    let {numberOfBatchesRetrieved, marvelCharacters} = MarvelCharactersReducer;
    marvelCharacters = numberOfBatchesRetrieved > 0? marvelCharacters.toArray().slice(0, 100): [];
    return {numberOfBatchesRetrieved, marvelCharacters};
};

const MarvelCharactersListComponent = connect(
    mapStateToProps
)(MarvelCharactersListContainer);

export default MarvelCharactersListComponent;