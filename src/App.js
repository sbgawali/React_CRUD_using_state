import React, { Component ,PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import MyPureComp from './MyPureComp';

class App extends Component {
constructor(){
  super()
  this.state = {
      list: [{name:'Abc',grade:'A'}],
      name:'',
      grade:'',
      editId:''
  };
  this.addRecord = this.addRecord.bind(this);
  this.editRecord = this.editRecord.bind(this);
  this.deleteRecord = this.deleteRecord.bind(this);
  this.handleInput = this.handleInput.bind(this);
}
addRecord(){
  console.log(this.state)
  let list1 = [...this.state.list];
  if(this.state.editId !=''){
  //   let record = this.state.list[this.state.editId];
  //  // let updatedRec = [...record];
  //   updatedRec.name= this.state.name;
  //   updatedRec.grade= this.state.grade;
  //   this.setState({list:updatedRec,name:'',grade:'',editId:''});
    //var obj ={name:this.state.name,grade:this.state.grade}
    
    list1.splice(this.state.editId,1)
    //let 
    //this.setState({list:record})


  }
  //else{
    var obj ={name:this.state.name,grade:this.state.grade}
    let list =[...list1,obj];
    this.setState({list:list,name:'',grade:'',editId:''});
 // }

}
editRecord(index,name){
  
  let record = this.state.list[index];
  this.setState({...record,editId:index})

}

deleteRecord(index){
  let record = [...this.state.list];
  record.splice(index,1)
  this.setState({list:record})
}
handleInput(event){
  let name = event.target.name;
  let val = event.target.value;
  if(name=='grade'){
    val = val.toUpperCase()
  }
  this.setState({[event.target.name]:val})
}
handleIncrement = () => {
    this.setState(state => ({
        count: state.count + 10,
    }));
};
componentDidMount(){
  
}

render() { 
    console.log('reg comp') 
  let labelStyle={display:'block',margin:12}
  //let actionbtn = 
  let records = this.state.list;
  records.sort((a,b)=>{
    if(a.name < b.name)
     return -1;
    if(a.name > b.name)
     return 1;
    return 0;
  });
  return (
      <div style={{marginLeft:160,marginTop:20}}>
        {/* <ClickCounter name='dodc'/>
        <HoverCounter/> */}
      <div style={{margin:10}}>
      
          <label style={labelStyle}>
            Name:
            <input type="text" name="name" onChange={this.handleInput} value={this.state.name} style={{
  textTransform: 'capitalize'}}/>
          </label>
          <label style={labelStyle}>
            Grade:
            <input type="text" name="grade" onChange={this.handleInput} value={this.state.grade} style={{
  textTransform: 'uppercase'}}/>
          </label>
          <button onClick={this.addRecord} style={{marginLeft:20,marginTop:10}}> Add/Edit Record</button>
           
      </div>
      {records.map((e,index) => (
          <div style={{padding:10,margin:6}}>
            <span><b>Name : </b> {e.name} </span> <b>Grade: </b><span>{e.grade}</span> 
            <span style={{marginLeft:'20px'}}><button onClick={() => this.editRecord(index)} /*onClick={this.editRecord(index,'sudhir')}*/> Edit Record</button></span>
            <span style={{marginLeft:'20px'}}><button onClick={() => this.deleteRecord(index)}> Delete Record</button></span>
          </div>
      ))}

          {/* <MyPureComp {...this.state}></MyPureComp> */}
          
        </div>
      );
  }
}


export default App;
