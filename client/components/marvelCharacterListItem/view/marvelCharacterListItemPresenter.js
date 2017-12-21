import React from 'react';

/**
 * @Function MarvelCharacterListItemPresenter
 * @desc React Presenter function returning component jsx
 */
const MarvelCharacterListItemPresenter = ({marvelCharacterName, marvelCharacterImageUrl, marvelCharacterImageExtension}) => {
    const imageUrl = `${marvelCharacterImageUrl}/standard_small.${marvelCharacterImageExtension}`;
    return (
        <li id="marvel-character-list-item-component"
            className="marvel_character_list_item col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="character_thumbnail_container col-xs-3 col-sm-3 col-md-3 col-lg-3"><img
                className="character_thumbnail" alt="No image available"
                src={imageUrl}/></div>
            <div className="character_name_container col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <span>{marvelCharacterName}</span></div>
        </li>
    )
};
export default MarvelCharacterListItemPresenter;