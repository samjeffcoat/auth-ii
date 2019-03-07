import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import "./App.css";
import SignIn from "./signin/SignIn";
import users from "./users/users";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            &nbsp; |&nbsp;
            <NavLink to="/users">Users</NavLink>
            &nbsp; |&nbsp;
            <button>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/login" component={SignIn} />
          <Route path="/users" component={users} />
        </main>
      </>
    );
  }
}

export default App;
