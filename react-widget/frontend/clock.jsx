import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  tick() {
    let time = new Date();
    this.setState({ time });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
      </div>
    );
  }
}

export default Clock;
