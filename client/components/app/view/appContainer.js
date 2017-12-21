import React, {Component} from 'react'
import AppPresenter from './appPresenter'

class AppContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount()
    {
        const {dispatch, actions, MarvelCharacterMinerComponent} = this.props;
        const marvelCharacterMinerComponent = new MarvelCharacterMinerComponent(dispatch, actions.MarvelCharacterMinerActions);
        marvelCharacterMinerComponent.mine();
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return AppPresenter(this.props);
    }
}

export default AppContainer;