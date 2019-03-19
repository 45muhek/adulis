import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Customer from "./components/parents/Customer";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        <Customer />
      </div>
    );
  }
}

export default App;
