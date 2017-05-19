import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      countdownStatus: 'stopped'
    }
    this.setCountdown = this.setCountdown.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newSeconds = this.state.seconds - 1;
      this.setState({seconds: newSeconds >= 0 ? newSeconds : 0});
    },1000)
  }

  setCountdown(seconds) {
    this.setState({ seconds, countdownStatus: 'started' })
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <Clock totalSeconds={seconds} />
        <CountdownForm setCountdown={this.setCountdown} />
      </div>
    )
  }
}

export default Countdown;
