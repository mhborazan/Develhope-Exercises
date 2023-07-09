import React, { Component } from 'react'

export default class ClickCounter extends Component {
    state = {
        count: 0
    }
    incrementer = () => {
        const count = this.state.count
        this.setState({count:count + 1})
    }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={()=>this.incrementer()}>Click Me</button>
      </div>
    )
  }
}
