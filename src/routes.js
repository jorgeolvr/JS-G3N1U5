import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import InitialPage from "./pages/InitialPage";
import GamePage from "./pages/GamePage";
import RankingPage from "./pages/RankingPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={InitialPage} />
        <Route path="/play" component={GamePage} />
        <Route path="/ranking" component={RankingPage} />
      </Switch>
    </Router>
  );
}
