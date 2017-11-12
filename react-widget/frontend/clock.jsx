import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = { time: new Date()};
    this.tick = this.tick.bind(this);
    this.props = props;
  }

  tick() {
    let time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    const intervalId = setInterval(this.tick, 1000);
    this.intervalId = intervalId;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const time = this.state.time;
    return (
      <div className={this.props.className}>
        <h1>Clock</h1>
        <div className='clockinfo'>
          <p>
            <span>Time</span>
            <span>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>
          </p>
          <p><span>Date</span>  <span>{time.toDateString()}</span></p>
        </div>
      </div>
    );
  }
}

export default Clock;
