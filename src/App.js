import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './containers/Main';
import Navbar from './containers/Navbar'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Router>
    );
  }
}

export default App;
