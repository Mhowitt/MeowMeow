import React from 'react';
import { Link , Redirect} from 'react-router-dom'

import UserFeed from "../containers/UserFeed";
import SignInForm from '../containers/SignInForm';

const Homepage = ({ user, signedIn }) => {
  if (signedIn === false) {
    return (
      <div>
        <SignInForm />
      </div>
    );
  }
  return <UserFeed user={user} />;
};

export default Homepage;