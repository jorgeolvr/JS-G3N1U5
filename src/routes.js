import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context";

import InitialPage from "./pages/InitialPage";
import GamePage from "./pages/GamePage";
import RankingPage from "./pages/RankingPage";
import EndPage from "./pages/EndPage";

export default function Routes() {
  const [globalScore, setGlobalScore] = useState(0);
  const [userName, setUserName] = useState("");
  const context = { globalScore, setGlobalScore, userName, setUserName };

  return (
    <Router>
      <Switch>
        <Context.Provider value={context}>
          <Route path="/" exact component={InitialPage} />
          <Route path="/play" component={GamePage} />
          <Route path="/ranking" component={RankingPage} />
          <Route path="/end" component={EndPage} />
        </Context.Provider>
      </Switch>
    </Router>
  );
}
