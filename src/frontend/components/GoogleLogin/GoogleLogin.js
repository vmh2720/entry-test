import React from 'react';
import GoogleLogin from 'react-google-login';
import login from '../../api/googleAuth';

import './googleLogin.css';

export default props => {
  const responseGoogle = async authResult => {
    try {
      if (authResult.code) {
        const result = await login(authResult.code);
        console.info(authResult);
        props.login(result);
      } else {
        throw new Error(authResult);
      }
    } catch (e) {
      console.info(e);
    }
  };

  return (
    <div className="login-page">
      <GoogleLogin
        clientId="811569830024-ojqros7mc8im786ddi1cj5l9tk94149c.apps.googleusercontent.com"
        buttonText="Login with google"
        responseType="code"
        redirectUri="postmessage"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
