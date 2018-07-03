import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom'
import PropTypes from "prop-types";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      firstName: "",
      lastName: ""
    };
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props
      .authUser("signup", this.state)
      .then(() => {
        // this.props.history.push("/");
        <Redirect to="/" />
      })
      .catch(() => {
        // we failed to log in, display the error message
        return;
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
      history,
      removeError,
      errors
      } = this.props;

    return (
      <div className="row" style={{height: "100vh"}}>
        <div className="col-sm-6 mx-auto my-auto">
          <div className="card">
            <div className="card-body text-center">
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
              Have an account?  &nbsp;
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