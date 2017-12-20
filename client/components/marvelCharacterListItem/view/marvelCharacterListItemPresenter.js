import React from 'react';

/**
 * @Function MarvelCharacterListItemPresenter
 * @desc React Presenter function returning component jsx
 */
const MarvelCharacterListItemPresenter = () => (
    <li id="marvel-character-list-item-component" className="marvel_character_list_item col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="character_thumbnail_container col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="character_thumbnail" alt="No image available" src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_small.jpg" /></div>
        <div className="character_name_container col-xs-9 col-sm-9 col-md-9 col-lg-9"><span>Spider-Man the amazing and!</span></div>
    </li>
);
export default MarvelCharacterListItemPresenter;