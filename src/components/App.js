import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header/index";
import GamesList from "./main/index";
import Weather from "./weather/index";
import Info from "./info/index";
import Footer from "./footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Switch>
          <Route exact path="/" component={<GamesList />} />
          <Route path="/Weather" component={<Weather />} />
          <Route path="/Info" component={<Info />} />
        </Switch> */}
        <GamesList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
