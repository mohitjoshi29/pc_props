import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        this.state={
            subj:"math",
            num:345345345
        }
    }
  render() {
    return (
      <div>
        <hi>Child data</hi>   
        <button onClick={()=>this.props.fun("lifting value...")}>lifting</button>     
      </div>
    )
  }
}
