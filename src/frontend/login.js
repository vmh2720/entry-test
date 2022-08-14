import React, { useState } from 'react';
import Login from './component/Login';
import Logout from './component/Logout';
import App from './App';

const Appp = () => {
  const [stateAuth, setStateAuth] = useState();
  const response = res => {
    setStateAuth(res);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
      {!stateAuth ? (
        <Login response={response} />
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="topnav">
            <a className="active" href="#home">
              Home
            </a>
            <a href="#TodoList">Todo List</a>
          </div>
          <Logout className="logout" response={response} />
          <App />
        </div>
      )}
    </div>
  );
};

export default Appp;
