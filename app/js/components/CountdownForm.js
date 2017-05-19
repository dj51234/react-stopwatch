import React from 'react';

class CountdownForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let seconds = this.refs.seconds.value;

    if (seconds.match(/^[0-9]*$/)) {
      this.props.setCountdown(parseInt(seconds,10));
      this.refs.seconds.value = '';
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input ref="seconds" type="text" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
}

export default CountdownForm;
