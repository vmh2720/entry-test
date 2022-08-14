import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import './button.css';

const Login = props => {
  const clientId = '674031099955-2d40l6ookvvs5kotl9njn5egfv9r62fa.apps.googleusercontent.com';
  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId });
    });
  }, []);

  const responseGoogle = response => {
    props.response(response);
  };
  return (
    <div className="button-login">
      <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy="single_host_origin" />
    </div>
  );
};

export default Login;
