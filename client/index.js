import './styles/grid-bootstrap.css';
import './styles/responsive-text.css';
import './styles/style.css';

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader';

const renderApp = () =>
{
    render(
        <AppContainer>
            <h1>Howzit</h1>
        </AppContainer>,
        document.getElementById('root')
    )
};

renderApp();

//if (module.hot) module.hot.accept('./components/root/rootComponent', () => renderApp());


