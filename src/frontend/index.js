/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import Logintest from './Logintest';

import './index.css';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Logintest />, document.getElementById('login'));
