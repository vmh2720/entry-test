import React from 'react';

import './profile.css';

const Profile = ({ user, logout }) => {
  return (
    <button className="button-logout" onClick={logout}>
      Logout
    </button>
  );
};

export default Profile;
