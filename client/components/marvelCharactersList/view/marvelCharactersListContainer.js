import React, {Component} from 'react'
import MarvelCharactersListPresenter from './marvelCharactersListPresenter'

class MarvelCharactersListContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return MarvelCharactersListPresenter(this.props);
    }
}

export default MarvelCharactersListContainer;