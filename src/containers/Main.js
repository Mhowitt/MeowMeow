import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Link, Route, withRouter, Redirect } from 'react-router-dom'

import { removeError } from "../store/actions/errors";
import { authUser, loginUser } from "../store/actions/auth";

import { Auth } from './Auth'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import UserProfile from '../components/UserProfile'
import Homepage from '../components/Homepage'

const Main  = (props) => {
  const { authUser, currentUser, errors, removeError, loginUser } = props;
    return (
      <div>
        <Switch>
          <Route
              exact
              path="/signin"
              render={props => {
                if (currentUser.isAuthenticated) {
                  return <Redirect to="/" />
                }
                return (
                  <SignInForm
                    buttonText="Log in"
                    errors={errors}
                    removeError={removeError}
                    heading="Welcome Back to MeowMeow!"
                    loginUser={loginUser}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/signup"
              render={props => {
                if (currentUser.isAuthenticated) {
                  return <Redirect to="/" />;
                }
                return (
                  <SignUpForm
                    buttonText="Sign me up!"
                    errors={errors}
                    removeError={removeError}
                    heading="Join MeowMeow today!"
                    authUser={authUser}
                    {...props}
                  />
                );
              }}
            />

            <Route
              path="/:username"
              render={props => (
                <UserProfile currentUser={currentUser} {...props} />
              )}
            />

            {/* <Route path="/meows" component={<MeowList />} /> */}

            <Route
              exact
              path="/"
              render={props => <Homepage {...props} currentUser={currentUser} />}
            />
        </Switch>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
};

Main.propTypes = {
  signIn: PropTypes.func,
  signUp: PropTypes.func,
  authUser: PropTypes.func,
  loginUser: PropTypes.func,
  currentUser: PropTypes.object,
  removeError: PropTypes.func,
  errors: PropTypes.object
};

export default withRouter(
  connect(mapStateToProps, { loginUser, authUser, removeError })(Main)
);