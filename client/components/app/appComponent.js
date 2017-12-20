import React, {Component} from 'react'
// import { Provider } from 'react-redux'
// import {modelFactory} from '../../configurations/configureFactories';
// import {appActions, errorBoundaryActions} from '../../configurations/configureActions';
// import configureStore from '../../configurations/configureStore';
import MainContentComponent from '../mainContent/mainContentComponent';
// import ErrorBoundaryComponent from '../errorBoundary/errorBoundaryComponent';

//const store = configureStore();

export default class AppComponent extends Component {
    render() {
        return (
            <div>
                <header className="app_header"><h1>EncycloMarvel</h1></header>
                <MainContentComponent></MainContentComponent>
            </div>
            // <Provider store={store}>
            //
            //     <ErrorBoundaryComponent actions={errorBoundaryActions} sourceComponent="App">
            //     <AppComponent actions={appActions} errorActions={errorBoundaryActions} modelFactory={modelFactory} />
            //     </ErrorBoundaryComponent>
            //</Provider>
        )
    }
}