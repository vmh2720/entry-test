/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Appp from './login';

import './index.css';

if (module.hot) {
  module.hot.accept();
}

// ReactDOM.render(
//   <div className="topnav">
//     <a className="active" href="#home">
//       Home
//     </a>
//     <a href="#TodoList">Todo List</a>
//   </div>,
//   document.getElementById('topnav'),
// );

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Appp />, document.getElementById('login'));
