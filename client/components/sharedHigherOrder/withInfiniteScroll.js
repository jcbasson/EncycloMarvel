import React, {Component} from 'react';

const withInfiniteScroll = (WrappedComponent) =>
    class WithInfiniteScroll extends Component {
        componentDidMount() {
            window.addEventListener('scroll', this.onScroll, false);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll, false);
        }

        onScroll = () =>{
            if(!this.props.onScrollHandler)return;

            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500))
            {
                window.requestAnimationFrame(this.props.onScrollHandler);
            }

        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

export default withInfiniteScroll;