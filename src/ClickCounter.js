import React, { Component } from 'react';
import WrappedComponent from './WrappedComponent';
class ClickCounter extends Component {
        
    render() {
        let {count,handleIncrement,name} = this.props;
        return (
            <div>
    <button onClick={handleIncrement}>{name} Clicked {count} times</button>
            </div>
        );
    }
}

export default WrappedComponent(ClickCounter,10);