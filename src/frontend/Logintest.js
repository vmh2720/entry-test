import React from 'react';
import GoogleLogin from './components/GoogleLogin/GoogleLogin';
import Profile from './components/Profile/Profile';
import App from './App';

class Logintest extends React.Component {
  state = {
    isLoggedIn: false,
    userProfile: null,
  };

  login = userData => {
    this.setState({
      isLoggedIn: true,
      userProfile: userData.user,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
      userProfile: null,
    });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="topnav">
              <a className="active" href="#home">
                Home
              </a>
              <a href="#TodoList">Todo List</a>
            </div>
            <Profile user={this.state.userProfile} logout={this.logout}></Profile>
            <App />
          </div>
        ) : (
          <GoogleLogin login={this.login} />
        )}
      </>
    );
  }
}

export default Logintest;
