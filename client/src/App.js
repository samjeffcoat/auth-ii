import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./App.css";
import SignIn from "./signin/SignIn";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp; |&nbsp;
            <button>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/login" component={SignIn} />
        </main>
      </>
    );
  }
}

export default App;
