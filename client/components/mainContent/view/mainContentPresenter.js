import React from 'react';
import { Switch, Route} from 'react-router-dom';
import MarvelCharactersListComponent from '../../marvelCharactersList/marvelCharacterListComponent';
import MarvelCharacterInfoComponent from '../../marvelCharacterInfo/marvelCharacterInfoComponent';


/**
 * @Function MainContentPresenter
 * @desc React Presenter function returning component jsx
 */
const MainContentPresenter = () =>
    (
        <main id="main-content-component" className="container-fluid col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4 col-lg-offset-4 col-lg-4">
            <Switch>
                <Route exact path='/' component={ MarvelCharactersListComponent } />
                <Route path='/marvel-characters' component={ MarvelCharactersListComponent } />
                <Route path='/marvel-character' component={ MarvelCharacterInfoComponent } />
            </Switch>
        </main>
    );

export default MainContentPresenter;