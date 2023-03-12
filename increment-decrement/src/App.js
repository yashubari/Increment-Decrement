import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    
  }
  increment = () =>{
    this.setState({count:this.state.count +1})
  }
  decrement = () =>{
    if(this.state.count == 0){
      this.setState({count:0})
    }
    else{
      this.setState({count:this.state.count -1})
    }
    
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        
      </div>
    );
  }
}



export default App;
