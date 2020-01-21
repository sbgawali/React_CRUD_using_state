import React, { PureComponent,Component } from 'react';

class MyPureComp extends PureComponent {
    // constructor(){
    //     super()
    //     this.state = {
    //         name:'sudhir'
    //     };
    //   }
    //   componentDidMount(){
    //       setInterval(()=>this.setState({name:'sudhir'}),1000)
    //   }
    //   handleIncrement = () => {
    //       this.setState(state => ({
    //           count: state.count + 10,
    //       }));
    //   };
     
    render() {
        console.log('pure comp')
        return (
            <div>
                
                
                  <h1>pure comp {this.props.name} </h1>
            </div>
        );
    }
}

export default MyPureComp;