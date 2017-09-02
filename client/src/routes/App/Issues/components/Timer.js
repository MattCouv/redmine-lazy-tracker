import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import AvStop from "material-ui/svg-icons/av/stop";
import AvPause from "material-ui/svg-icons/av/pause";
import AvPlayArrow from "material-ui/svg-icons/av/play-arrow";

const styles = {
  button: {
    padding: 0
  }
};
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
    let seconds = diff.getSeconds() || 0;
    let minutes = diff.getMinutes() || 0;
    let hours = diff.getHours() - 1 || 0;

    return (
      <div className="timer">
        <h3>
          {this.addZero(hours)}:{this.addZero(minutes)}:{this.addZero(seconds)}
        </h3>
        <div className="timerMenu">
          <IconButton onClick={this.start} style={styles.button}>
            <AvPlayArrow />
          </IconButton>
          <IconButton onClick={this.pause} style={styles.button}>
            <AvPause />
          </IconButton>
          <IconButton onClick={this.reset} style={styles.button}>
            <AvStop />
          </IconButton>
        </div>
      </div>
    );
  }
}
