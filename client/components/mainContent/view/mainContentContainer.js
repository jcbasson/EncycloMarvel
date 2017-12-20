import React, {Component} from 'react'
import MainContentPresenter from './mainContentPresenter'

class MainContentContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return MainContentPresenter(this.props);
    }
}

export default MainContentContainer;