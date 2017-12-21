import './styles/grid-bootstrap.css';
import './styles/responsive-text.css';
import './styles/style.css';

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader';
import RootComponent from './components/rootComponent';

const renderApp = () =>
{
    render(
        <AppContainer>
            <RootComponent />
        </AppContainer>,
        document.getElementById('root')
    )
};

renderApp();

if (module.hot) module.hot.accept('./components/app/appComponent', () => renderApp());


