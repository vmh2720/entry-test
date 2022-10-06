import React from 'react';
import GoogleLogin from 'react-google-login';
import login from '../../api/googleAuth';

import './googleLogin.css';

export default props => {
  const responseGoogle = authResult => {
    try {
      if (authResult.code) {
        const result = login(authResult.code);
        console.info(authResult);
        // eslint-disable-next-line react/prop-types
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
        clientId="486399924742-s2e240actpvcjdtv0miq1k5nivn98fej.apps.googleusercontent.com"
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
