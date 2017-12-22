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
        return nextProps.currentlyViewedMarvelCharacter.id !== this.props.currentlyViewedMarvelCharacter.id;
    }

    render() {
        return MarvelCharacterInfoPresenter(this.props);
    }
}

export default MarvelCharacterInfoContainer;