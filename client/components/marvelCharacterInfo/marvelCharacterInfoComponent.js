import {connect} from 'react-redux';
import MarvelCharacterInfoContainer from './view/marvelCharacterInfoContainer';

const MarvelCharacterInfoComponent = connect(
)(MarvelCharacterInfoContainer);

export default MarvelCharacterInfoComponent;