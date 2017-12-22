import {connect} from 'react-redux';
import MarvelCharacterInfoContainer from './view/marvelCharacterInfoContainer';

const mapStateToProps = (state) => {
    const {MarvelCharactersReducer} = state;
    const {currentlyViewedMarvelCharacter} = MarvelCharactersReducer;
    return {currentlyViewedMarvelCharacter};
};

const MarvelCharacterInfoComponent = connect(
    mapStateToProps
)(MarvelCharacterInfoContainer);

export default MarvelCharacterInfoComponent;