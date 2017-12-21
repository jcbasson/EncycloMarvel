import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {appActions} from '../configurations/configureActions';
import configureStore from '../configurations/configureStore';
import MarvelCharacterMinerComponent from './marvelCharacterMiner/marvelCharacterMinerComponent';
import AppComponent from './app/appComponent'

const store = configureStore();

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppComponent actions={appActions} MarvelCharacterMinerComponent={MarvelCharacterMinerComponent}></AppComponent>
            </Provider>
        )
    }
}