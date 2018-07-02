import React, { Component } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: ""
    };
  }

    handleSubmit = e => {
      e.preventDefault();
      console.log('hit submit')
      this.props.loginUser("signin", this.state).then(() =>{
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      })
    }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { handle } = this.state;
    const {
      heading,
      buttonText,
      errors,
      removeError,
      history
    } = this.props;
    // history.listen(() => {
    //   removeError();
    // });
    return (
      <div class="row" style={{height: "100vh"}}>
        <div class="col-sm-6 mx-auto my-auto">
          <div class="card">
            <div class="card-body text-center">
              <h2>{heading}</h2>
              <form onSubmit={this.handleSubmit} className="form-signin py-3">
                {/* {errors.message && <div>{errors.message}</div>} */}
                <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                <div className="col-10 mx-auto mb-1">
                  <label htmlFor="handle">Handle</label>
                  <input
                    id="handle"
                    name="handle"
                    onChange={this.handleChange}
                    type="text"
                    value={handle}
                    required
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-md btn-primary">Sign In!</button>
              </form>
              <div>
                Don't have an account?
                <Link to="/signup">Sign up here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SignInForm.propTypes = {
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  heading: PropTypes.string,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  removeError: PropTypes.func
};

export default SignInForm;