import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
