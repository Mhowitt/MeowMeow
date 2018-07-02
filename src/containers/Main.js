import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Switch, Link, Route, Redirect } from 'react-router-dom'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import UserProfile from '../components/UserProfile'
import Homepage from '../components/Homepage'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: null,
     };
  }
  render() {
    const { signedIn, user } = this.state
    return (
      <div>
        <Switch>
          <Route
              exact
              path="/signin"
              render={props => {
                if (signedIn === true) {
                  return <Redirect to="/" />
                }
                return (
                  <SignInForm
                    buttonText="Log in"
                    heading="Welcome Back to MeowMeow!"
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/signup"
              render={props => {
                if (signedIn  === true) {
                  return <Redirect to="/" />;
                }
                return (
                  <SignUpForm
                    buttonText="Sign me up!"
                    heading="Join MeowMeow today!"
                    {...props}
                  />
                );
              }}
            />

            <Route
              path="/:username"
              render={props => (
                <UserProfile user={user} {...props} />
              )}
            />

            {/* <Route path="/meows" component={<MeowList />} /> */}

            <Route
              exact
              path="/"
              render={props => <Homepage {...props} user={user} signedIn={signedIn} />}
            />
        </Switch>
      </div>
    );
  }
}

export default Main;