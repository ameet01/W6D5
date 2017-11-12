import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Search from'./frontend/search';

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

    this.names = ['Joe', 'Anish', 'Maxwell', 'Harish', 'Jennifer', 'Ameet'];
  }

  render() {
    return (
      <div>
        <Clock className='clock' />
        <Search names={this.names} />
        <Weather />
        <Tabs className='tabs' data={this.tabs}/>
      </div>
    );
  }
}

export default Root;
