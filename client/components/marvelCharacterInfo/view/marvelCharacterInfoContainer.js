import React, {Component} from 'react'
import MarvelCharacterInfoPresenter from './marvelCharacterInfoPresenter'

class MarvelCharacterInfoContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return MarvelCharacterInfoPresenter(this.props);
    }
}

export default MarvelCharacterInfoContainer;