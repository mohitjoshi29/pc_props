import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {
  constructor(val){
    super(val);
    this.state={
      name:"john",
      dept:"developer",
      loginstate:false,
    }
    this.handlefunction=this.handlefunction.bind(this);
  }
  handlefunction(valuee){
    alert(`share data from parent to child ${valuee}`);
    this.setState({
      loginstate:true
    })
  }
  render() {
    return (
      <div>
        <h1>parent Component</h1>
        <Child fun={this.handlefunction}/>
        {/* {
          this.state.loginstate ? : null
        } */}
      </div>
    )
  }
}
