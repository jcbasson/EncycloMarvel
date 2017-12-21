import React from 'react';
import MarvelCharacterListItemComponent from '../../marvelCharacterListItem/marvelCharacterListItemComponent'

/**
 * @Function MarvelCharactersListPresenter
 * @desc React Presenter function returning component jsx
 */
const MarvelCharactersListPresenter = ({isFirstBatchOfCharactersRetrieved, marvelCharacters}) => (
    <section id="marvel-characters-list-component">
        <header className="marvel_characters_list_component__header"><h2>Marvel Characters A-Z</h2></header>
        <ul className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            {!isFirstBatchOfCharactersRetrieved && <span>Busy Loading...</span>}
            {isFirstBatchOfCharactersRetrieved  && marvelCharacters.map(function(marvelCharacter){
                return <MarvelCharacterListItemComponent marvelCharacterName={marvelCharacter.name} marvelCharacterImageUrl={marvelCharacter.thumbnail.path} marvelCharacterImageExtension={marvelCharacter.thumbnail.extension}></MarvelCharacterListItemComponent>;
            })}
        </ul>
    </section>
);
export default MarvelCharactersListPresenter;