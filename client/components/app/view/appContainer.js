import React, {Component} from 'react'
import AppPresenter from './appPresenter'
import marvelCharacterMinerComponent from '../../marvelCharacterMiner/marvelCharacterMinerComponent';

class AppContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount()
    {
        const {dispatch} = this.props;
        marvelCharacterMinerComponent.setDispatcher(dispatch);
        marvelCharacterMinerComponent.mine();
    }

    render() {
        return AppPresenter(this.props);
    }
}

export default AppContainer;