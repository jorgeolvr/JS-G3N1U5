import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import InitialPage from "./pages/InitialPage";
import GamePage from "./pages/GamePage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={InitialPage} />
        <Route path="/play" exact component={GamePage} />
      </Switch>
    </Router>
  );
}
