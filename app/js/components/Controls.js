import React from 'react';

class Controls extends React.Component {
  constructor() {
    super();
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  }

  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButtons = () => {
      if (countdownStatus === 'started') {
        return (
          <button className="button secondary expanded" onClick={this.onStatusChange('paused')}>Pause</button>
        )
      } else if (countdownStatus === 'paused') {
        return (
          <button className="button primary expanded" onClick={this.onStatusChange('started')}>Start</button>
        )
      }
    }
    return (
      <div className="controls">
        {renderStartStopButtons()}
        <button className="button alert hollow expanded" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}

export default Controls;
