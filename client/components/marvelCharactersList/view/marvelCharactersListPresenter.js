import React from 'react';
/**
 * @Function MarvelCharactersListPresenter
 * @desc React Presenter function returning component jsx
 */
const MarvelCharactersListPresenter = ({componentList}) => (
    <section id="marvel-characters-list-component">
        <header className="marvel_characters_list_component__header"><h2>Marvel Characters A-Z</h2></header>
        <ul className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            {componentList}
        </ul>
    </section>
);
export default MarvelCharactersListPresenter;