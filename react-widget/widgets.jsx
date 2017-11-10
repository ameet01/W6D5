import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
import Clock from './frontend/clock';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
