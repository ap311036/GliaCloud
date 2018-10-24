import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 60,
      on: false
    }
  }
  startTimer = () => {
    this.setState({
      on: true,
    })
    let self = this;
    this.timer = setInterval(() => this.setState({
      time: self.state.time += 1,
    }), 1000);
    console.log("startTimer")
  }
  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({
      on: false
    })
    console.log('pauseTimer');
  }
  stopTimer = () => {
    this.setState({
      time: 0,
    })
    console.log('stopTimer');
  }
  render() {
    const {
      time,
      on
    } = this.state;
    let hh = Math.floor(time / 3600);
    let mm = Math.floor(time / 60) % 60;
    let ss = time % 60;

    return (
      <div>
        <h3>timer: {`${hh < 10 ? '0' + hh : hh} : ${mm < 10 ? '0' + mm : mm} : ${ss < 10 ? '0' + ss : ss}`}</h3>
        <button onClick={() => on || this.startTimer()}>Start</button>
        <button onClick={() => this.pauseTimer()}>Pause</button>
        <button onClick={() => this.stopTimer()}>Stop</button>
      </div>
    );
  }
}
