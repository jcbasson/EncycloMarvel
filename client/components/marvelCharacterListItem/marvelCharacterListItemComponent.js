import {connect} from 'react-redux';
import MarvelCharacterListItemContainer from './view/marvelCharacterListItemContainer';

const MarvelCharacterListItemComponent = connect(
)(MarvelCharacterListItemContainer);

export default MarvelCharacterListItemComponent;