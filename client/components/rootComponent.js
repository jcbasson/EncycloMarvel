import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from '../configurations/configureStore';
import AppComponent from './app/appComponent'

const store = configureStore();

export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppComponent></AppComponent>
            </Provider>
        )
    }
}