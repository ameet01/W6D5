import React from 'react';
import Clock from './frontend/clock';

class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Clock className='clock' />
      </div>
    );
  }
}

export default Root;
