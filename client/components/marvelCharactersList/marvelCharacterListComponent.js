import {connect} from 'react-redux';
import MainContentContainer from './view/marvelCharactersListContainer';

const mapStateToProps = (state) => {
    const {MiningMarvelCharactersReducer} = state;
    let {isFirstBatchOfCharactersRetrieved, marvelCharacters} = MiningMarvelCharactersReducer;
    marvelCharacters = marvelCharacters.slice(0, 20);
    return {isFirstBatchOfCharactersRetrieved, marvelCharacters};
};

const MarvelCharactersListComponent = connect(
    mapStateToProps
)(MainContentContainer);

export default MarvelCharactersListComponent;