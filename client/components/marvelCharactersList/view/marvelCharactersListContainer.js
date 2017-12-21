import React, {Component} from 'react'
import MarvelCharactersListPresenter from './marvelCharactersListPresenter'

class MarvelCharactersListContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount()
    {
        const {dispatch, actions, MarvelCharacterMinerComponent} = this.props;
        const marvelCharacterMinerComponent = MarvelCharacterMinerComponent(dispatch, actions);
        marvelCharacterMinerComponent.mine();
    }
    render() {
        return MarvelCharactersListPresenter(this.props);
    }
}

export default MarvelCharactersListContainer;