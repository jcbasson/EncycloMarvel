import React, {Component} from 'react';
import Rx from 'rxjs';

const withInfiniteScroll = (WrappedComponent) =>
    class WithInfiniteScroll extends Component {
        componentDidMount() {
            const debouncedWindowScrollEvent = Rx.Observable.fromEvent(window, 'scroll').debounceTime(500);
            this.debouncedWindowScrollSubscription = debouncedWindowScrollEvent.subscribe(() => {
                this.onScroll();
            });
        }

        componentWillUnmount() {
            this.debouncedWindowScrollSubscription.unsubscribe();
        }

        onScroll = () =>{
            if(!this.props.onScrollHandler)return;

            if(this.checkIfMustExpandContent())
            {
                let scrollDetails = {
                    windowInnerHeight: window.innerHeight,
                    windowScrollY: window.scrollY,
                    documentHtmlOffsetHeight: document.documentElement.offsetHeight,
                    documentElement:  document.documentElement
                };
                window.requestAnimationFrame(this.props.onScrollHandler.bind(null, scrollDetails, this.props.dispatch));
            }
        };

        checkIfMustExpandContent = () => {
            return (window.innerHeight + window.scrollY) >= (document.documentElement.offsetHeight - 500);
        };

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

export default withInfiniteScroll;