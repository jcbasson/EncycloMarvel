import React, {Component} from 'react'
import AppPresenter from './appPresenter'
import MarvelCharacterMinerComponent from '../../marvelCharacterMiner/marvelCharacterMinerComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount()
    {
        const {dispatch} = this.props;
        const marvelCharacterMinerComponent = new MarvelCharacterMinerComponent(dispatch);
        marvelCharacterMinerComponent.mine();
    }

    render() {
        return AppPresenter(this.props);
    }
}

export default AppContainer;