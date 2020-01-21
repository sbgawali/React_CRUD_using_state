import React, { Component } from 'react';


const WrappedComponent = (OriginalComponent,initiaCounter) => {
   class HOC extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        };
    }
    
    handleIncrement = () => {
        this.setState(state => ({
            count: state.count + initiaCounter,
        }));
    };
    render(){        
        return <OriginalComponent count={this.state.count} handleIncrement={this.handleIncrement} {...this.props}/>
    }
   }

   return HOC;
}


export default WrappedComponent;