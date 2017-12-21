import React from 'react';
import MarvelCharactersListComponent from '../../marvelCharactersList/marvelCharacterListComponent';
import MarvelCharacterInfoComponent from '../../marvelCharacterInfo/marvelCharacterInfoComponent';

/**
 * @Function MainContentPresenter
 * @desc React Presenter function returning component jsx
 */
const MainContentPresenter = ({appActions}) => (
    <main id="main-content-component" className="container-fluid col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-4 col-md-4 col-lg-offset-4 col-lg-4">
        <MarvelCharactersListComponent></MarvelCharactersListComponent>
        {/*<MarvelCharacterInfoComponent></MarvelCharacterInfoComponent>*/}
    </main>
);
export default MainContentPresenter;