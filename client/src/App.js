import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Customer from "./components/parents/Customer";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

//check for token
if (localStorage.jwtToken) {
  //SET AUTH TOKEN HEADER AUTH
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //SET USER AND isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //chack for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //LOGOUT USER
    store.dispatch(logoutUser());

    //Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {" "}
        <Router>
          <div>
            <Customer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
