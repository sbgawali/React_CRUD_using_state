import React, { Component } from 'react';
import WrappedComponent from './WrappedComponent';
class HoverCounter extends Component {
    
    render() {
        let {count,handleIncrement} = this.props;
        return (
            <div>
                <h1  onMouseOver={handleIncrement}>Hover {count} times</h1>
            </div>
        );
    }
}

export default WrappedComponent(HoverCounter,10);