import React from 'react';
import { Button } from 'antd';

import './profile.css';

const Profile = ({ user, logout }) => {
  return (
    <Button className="button-logout" type="primary" onClick={logout}>
      Logout
    </Button>
  );
};

export default Profile;
