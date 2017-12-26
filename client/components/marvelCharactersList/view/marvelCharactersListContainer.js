import React, {Component} from 'react'
import MarvelCharactersListPresenter from './marvelCharactersListPresenter';
import MarvelCharacterListItemComponent from '../../marvelCharacterListItem/marvelCharacterListItemComponent'

class MarvelCharactersListContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {numberOfBatchesRetrieved, marvelCharacters} = this.props;
        let componentList = ( <h4>Loading...</h4>);
        if(numberOfBatchesRetrieved > 0 && marvelCharacters) {
            componentList =  marvelCharacters.map((marvelCharacter) =>
            {
                let name = marvelCharacter.name? marvelCharacter.name: 'No Name';
                let path = marvelCharacter.thumbnail && marvelCharacter.thumbnail.path ? marvelCharacter.thumbnail.path: '';
                let extension = marvelCharacter.thumbnail && marvelCharacter.thumbnail.extension ? marvelCharacter.thumbnail.extension: '';
                return (<MarvelCharacterListItemComponent key={marvelCharacter.id} marvelCharacterId={marvelCharacter.id} marvelCharacterName={name} marvelCharacterImageUrl={path} marvelCharacterImageExtension={extension}></MarvelCharacterListItemComponent>);
            });

        }
        return MarvelCharactersListPresenter({componentList});
    }
}

export default MarvelCharactersListContainer;