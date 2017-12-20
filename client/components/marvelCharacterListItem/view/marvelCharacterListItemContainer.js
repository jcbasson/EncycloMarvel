import React, {Component} from 'react'
import MarvelCharacterListItemPresenter from './marvelCharacterListItemPresenter'

class MarvelCharacterListItemContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return MarvelCharacterListItemPresenter(this.props);
    }
}

export default MarvelCharacterListItemContainer;