import React from 'react';
import { GoogleLogout } from 'react-google-login';
import './button.css';

const Logout = props => {
  const logout = () => {
    props.response();
  };
  const clientId = '674031099955-2d40l6ookvvs5kotl9njn5egfv9r62fa.apps.googleusercontent.com';
  return (
    <div className="button-logout">
      <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={logout}></GoogleLogout>
    </div>
  );
};

export default Logout;
