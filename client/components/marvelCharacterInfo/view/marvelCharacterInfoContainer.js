import React, {Component} from 'react'
import MarvelCharacterInfoPresenter from './marvelCharacterInfoPresenter';
import marvelCharacterInfoActions from '../actions/marvelCharacterInfoActions';

class MarvelCharacterInfoContainer extends Component {
    constructor(props) {
        super(props)
        const { match: { params }, dispatch } = props;
        if(params.id)dispatch(marvelCharacterInfoActions.setViewedMarvelCharacter(params.id));
    }
    shouldComponentUpdate(nextProps)
    {
        const {props} = this;
        if(nextProps.currentlyViewedMarvelCharacter
            && props.currentlyViewedMarvelCharacter
            && nextProps.currentlyViewedMarvelCharacter.id
            && props.currentlyViewedMarvelCharacter.id)
        {
            return nextProps.currentlyViewedMarvelCharacter.id !== props.currentlyViewedMarvelCharacter.id;
        }
        return true;
    }

    render() {
        let imageUrl = '';
        let name =  '';
        let description = '';
        const {currentlyViewedMarvelCharacter}= this.props;
        if(currentlyViewedMarvelCharacter)
        {
            name = currentlyViewedMarvelCharacter.name? currentlyViewedMarvelCharacter.name: '';
            description = currentlyViewedMarvelCharacter.description? currentlyViewedMarvelCharacter.description: '';
            if (currentlyViewedMarvelCharacter.thumbnail && currentlyViewedMarvelCharacter.thumbnail.path && currentlyViewedMarvelCharacter.thumbnail.extension) {
                imageUrl = `${currentlyViewedMarvelCharacter.thumbnail.path}/landscape_incredible.${currentlyViewedMarvelCharacter.thumbnail.extension}`;
            }
        }
        return MarvelCharacterInfoPresenter({name, description, imageUrl});
    }
}

export default MarvelCharacterInfoContainer;