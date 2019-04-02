import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header/index";
import GamesList from "./main/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <GamesList />
      </React.Fragment>
    );
  }
}

export default App;
