import {connect} from 'react-redux';
import MainContentContainer from './view/mainContentContainer';
import {withRouter} from 'react-router-dom';

const MainContentComponent = connect(
)(MainContentContainer);

export default withRouter(MainContentComponent);