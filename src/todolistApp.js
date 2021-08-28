import logo from './logo.svg';
import 'assets/css/style.css';
import Homepage from 'scenes/Homepage';
import {Component} from 'react';

function List(props){
        return(
            <ul>
                {
                props.item.map((items, index)=>
                <li key={index}>{items}</li>
                )
                }
            </ul>
        )
    
}



class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            value : '',
            item : []
        }
    }

    handelClick = (event) =>{
    event.preventDefault()
    this.setState({
        item : [...this.state.item, this.state.value],
        value : ''
    })  
    }

    handelChange = (event) => {
        this.setState({
          value : event.target.value
        })
    console.info(this.state.value)
        
      }


  render(){
  localStorage.setItem('storageTODO', this.state.item);
  return (
    <div className="App">
      <div className="container mt-2">
          <form >
              <input value={this.state.value} onChange={this.handelChange}></input>
              <button onClick={this.handelClick}>submit</button>
          </form>
          <List item={this.state.item}></List>
         
          
        
        
        
      </div>
    </div>
  );
}
}

export default App;
