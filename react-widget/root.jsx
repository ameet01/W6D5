import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

class Root extends React.Component {
  constructor() {
    super();
    this.tabs = [
      {
        title: 'one',
        content: 'I am the first'
      },
      {
        title: 'two',
        content: 'I am the second'
      },
      {
        title: 'three',
        content: 'I am the third'
      }
    ];
  }

  render() {
    return (
      <div>
        <Clock className='clock' />
        <Weather />
        <Tabs className='tabs' data={this.tabs}/>
      </div>
    );
  }
}

export default Root;
