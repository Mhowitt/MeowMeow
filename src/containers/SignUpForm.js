import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from "prop-types";

class SignUpForm extends Component {
    state = {
      handle: "",
      firstName: "",
      lastName: "",
      signedIn: false
    };


  handleSubmit = e => {
    let { firstName, lastName, handle } = this.state;
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users", {
        firstName,
        lastName,
        handle
      })
      .then(() => {
        this.setState({
          signedIn: true
        });
      })
      .catch(() => {
        alert("something went wrong!");
      });
    }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  render() {
    const { handle, firstName, lastName } = this.state;
    const {
      heading,
      buttonText,
      history
      } = this.props;
    history.listen(() => {

    });
    return (
      <div class="row" style={{height: "100vh"}}>
        <div class="col-sm-6 mx-auto my-auto">
          <div class="card">
            <div class="card-body text-center">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {/* {errors.message && <div>{errors.message}</div>} */}
              <div>
                <label htmlFor="handle">Handle</label>
                <input
                  id="handle"
                  name="handle"
                  onChange={this.handleChange}
                  type="text"
                  value={handle}
                  className="form-control"
                  required
                />
              </div>
              <div>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    onChange={this.handleChange}
                    type="text"
                    value={firstName}
                    className="form-control"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    onChange={this.handleChange}
                    type="text"
                    value={lastName}
                    className="form-control"
                    required
                  />
                </div>
                </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Sign up!</button>
            </form>
            <div>
              Have an account?
              <Link to="/signin">Sign back in here!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
SignUpForm.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  history: PropTypes.object,

};

export default SignUpForm;