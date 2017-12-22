import {connect} from 'react-redux';
import MarvelCharactersListContainer from './view/marvelCharactersListContainer';

const mapStateToProps = (state) => {
    const {MarvelCharactersReducer} = state;
    let {isFirstBatchOfCharactersRetrieved, marvelCharacters} = MarvelCharactersReducer;
    marvelCharacters = marvelCharacters.slice(0, 100);
    return {isFirstBatchOfCharactersRetrieved, marvelCharacters};
};

const MarvelCharactersListComponent = connect(
    mapStateToProps
)(MarvelCharactersListContainer);

export default MarvelCharactersListComponent;