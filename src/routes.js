import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import InitialPage from "./pages/InitialPage";
import GamePage from "./pages/GamePage";
import RankingPage from "./pages/RankingPage";
import EndPage from "./pages/EndPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={InitialPage} />
        <Route path="/play" component={GamePage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/end" component={EndPage} />
      </Switch>
    </Router>
  );
}
