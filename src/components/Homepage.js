import React from 'react';
import { Link , Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import UserFeed from "../containers/UserFeed";
import SignInForm from '../containers/SignInForm';

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return  (
      <div>
        <SignInForm />
      </div>
    );
  }
  return <UserFeed currentUser={currentUser} />;
};

Homepage.propTypes = {
  currentUser: PropTypes.object
};

export default Homepage;