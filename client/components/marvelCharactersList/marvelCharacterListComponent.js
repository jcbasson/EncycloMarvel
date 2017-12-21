import {connect} from 'react-redux';
import MainContentContainer from './view/marvelCharactersListContainer';

const MarvelCharactersListComponent = connect(
)(MainContentContainer);

export default MarvelCharactersListComponent;