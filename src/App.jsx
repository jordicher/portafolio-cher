import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Portfolio/>
        </Route>

        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;