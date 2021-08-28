import logo from './logo.svg';
import 'assets/css/style.css';
import Homepage from 'scenes/Homepage';
import {Component} from 'react';

function Umur(props){
  return(
    <span>umur {props.umur}</span>
  );
}

function Greeting(props){
  return(
    <h2>hai nama saya {props.nama} <Umur umur={props.umur}/></h2>
  );
}


class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }

  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.addInterval);
  }

  increase(){
    this.setState((state, props)  =>({
      time: parseInt(state.time) +1
    }))
  }

  render(){
    return(
      <div>{this.state.time}</div>
    );
  }

}

class Click extends Component{
  constructor(props){
  super(props)
  this.state ={
    status : true
  }
  this.Onclick = this.Onclick.bind(this);
  
  }

  Onclick(){
    this.setState(state =>({
      status: !state.status
    }))
    
  }

  render(){
    return(
      <button onClick={this.Onclick}>{this.state.status ? 'ON' : 'OFF'}</button>
    )
  }
 
}
class App extends Component{
  render(){
  return (
    <div className="App">
      <div className="container">
         <Greeting nama="zul" umur="20"/>
         <Timer start="1"></Timer>
         <Click></Click>
      </div>
    </div>
  );
}
}

export default App;
