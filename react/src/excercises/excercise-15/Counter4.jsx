import React, { Component, useContext } from 'react'
import CounterDisplay from './CounterDisplay';

export default class Counter4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initial
    }
  }
  componentDidMount(){
    const myInterval = setInterval(() => {
      this.setState({ count: this.state.count + this.props.increment});
    }, this.props.time);

    return () => clearInterval(myInterval);
  }
  render() {
    return (
      <CounterDisplay count={this.state.count}/>
    )
  }
}

