import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { setCurrentUser } from "./store/actions/auth"
import Main from './containers/Main';
import Navbar from './containers/Navbar'

const store = configureStore();

if(localStorage.handle) {
  try {
    store.dispatch(setCurrentUser(localStorage.handle));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}



class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
