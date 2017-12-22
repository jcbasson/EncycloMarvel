import {connect} from 'react-redux';
import AppContainer from './view/appContainer';
import {withRouter} from 'react-router-dom';

const AppComponent = connect(
)(AppContainer);

export default withRouter(AppComponent);