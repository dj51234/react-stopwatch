import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      countdownStatus: 'stopped'
    }
    this.setCountdown = this.setCountdown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
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
        case 'stopped':
          this.setState({seconds: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  onStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }

  render() {
    const { seconds, countdownStatus } = this.state;
    const renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.onStatusChange}/>
      } else {
        return <CountdownForm setCountdown={this.setCountdown} />
      }
    }
    return (
      <div>
        <Clock totalSeconds={seconds} />
        {renderControlArea()}
      </div>
    )
  }
}

export default Countdown;
