import React from 'react';
import { GoogleLogout } from 'react-google-login';

const Logout = props => {
  const logout = () => {
    console.log('logout successful');
    props.response();
  };
  const clientId = '674031099955-2d40l6ookvvs5kotl9njn5egfv9r62fa.apps.googleusercontent.com';
  return (
    <div>
      <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={logout}></GoogleLogout>
    </div>
  );
};

export default Logout;
