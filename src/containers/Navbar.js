import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarTogglerDemo01" ariaControls="navbarTogglerDemo01" ariaExpanded="false" ariaLabel="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">MeowMeow</Link>
          <ul className="navbar-nav mx-2 mt-1 mt-lg-0">
            <li className="nav-item active ml-2">
              <Link className="nav-link" to="/'">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item ml-2 mr-5">
              <Link className="nav-link" to="/users">Other Meowers</Link>
            </li>
            {this.props.currentUser.isAuthenticated ?
              <li className="nav-item active ml-2"><span className="nav-link">Welcome back {this.props.currentUser.user} !</span></li>
            :
            ""
            }
          <li className="ml-5">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
          </ul>
          {this.props.currentUser.isAuthenticated ?
                <button className="btn btn-danger my-1 my-sm-0 ml-auto" onClick={this.logout}>Logout</button>
            :
                <button className="btn btn-outline-danger my-2 my-sm-0" > <Link to="/signin">Sign In</Link></button>
            }

        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

Navbar.propTypes = {
  currentUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(Navbar);