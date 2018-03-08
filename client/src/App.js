import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Account from "./pages/Account";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/account" component={Account} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
