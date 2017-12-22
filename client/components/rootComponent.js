import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from '../configurations/configureStore';
import AppComponent from './app/appComponent';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
export default class RootComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <AppComponent>
                    </AppComponent>
                </BrowserRouter>
            </Provider>
        )
    }
};