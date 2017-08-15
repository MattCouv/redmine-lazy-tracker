import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTS: null,
      diff: null,
      interval: null,
      suspended: 0
    };
  }
  start = () => {
    if (this.state.startTS != null) {
      return;
    }
    this.setState({
      startTS: new Date() - this.state.suspended,
      interval: requestAnimationFrame(this.tick),
      suspended: 0
    });
  };
  pause = () => {
    cancelAnimationFrame(this.state.interval);
    this.setState({
      startTS: null,
      suspended: this.state.diff
    });
  };
  reset = () => {
    cancelAnimationFrame(this.state.interval);
    this.setState({
      startTS: null,
      diff: null,
      interval: null,
      suspended: 0
    });
  };
  tick = () => {
    this.setState({
      diff: new Date(new Date() - this.state.startTS),
      interval: requestAnimationFrame(this.tick)
    });
  };

  addZero = number => {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  };
  render() {
    let diff = this.state.diff || new Date("00:00:00");
    let hundrends = diff.getMilliseconds() || 0;
    let seconds = diff.getSeconds() || 0;
    let minutes = diff.getMinutes() || 0;
    let hours = diff.getHours() - 1 || 0;

    return (
      <div>
        <h1>
          {this.addZero(hours)}:{this.addZero(minutes)}:{this.addZero(seconds)}:{hundrends}
        </h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
