import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarTogglerDemo01" ariaControls="navbarTogglerDemo01" ariaExpanded="false" ariaLabel="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">MeowMeow</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Other Meowers</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-success my-2 my-sm-0" >Meow</button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;