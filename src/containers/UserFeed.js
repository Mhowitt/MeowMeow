import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Link, Route, withRouter, Redirect } from 'react-router-dom'

import { removeError } from "../store/actions/errors";
import { getMeows } from "../store/actions/meows";
import MeowForm from './MeowForm'
import MeowList from '../components/MeowList'

const UserFeed = (props) => {

  const { getMeows, currentUser, errors, removeError, meows } = props;
    return (
      <div className="row">
      <div className="col-10 mx-auto">
        <h1>UserFeed</h1>
        <MeowForm />
        <MeowList getMeows={getMeows} meows={meows} />
        </div>
      </div>
    );
  }


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    meows: state.meows
  };
}

UserFeed.propTypes = {
  currentUser: PropTypes.object.isRequired,

};

export default connect(mapStateToProps, { getMeows })(UserFeed);