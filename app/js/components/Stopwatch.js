import React from 'react';
import Clock from './Clock';

class Stopwatch extends React.Component {
  render() {
    return (
      <div>
        <Clock totalSeconds={194} />
      </div>
    )
  }
}

export default Stopwatch;
