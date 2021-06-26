import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "../routes/Auth";
import Main from "../routes/Main";
import Navigation from "../routes/Navigation";

const AppRouter = ({ isLoggedIn, useObj }) => (
  <Router>
    <Switch>
      <div style={{ textAlign: 'center' }}>
        <Navigation />
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Main useObj={useObj} />
            </Route>
          </>
        ) : (
            <Route exact path="/">
              <Auth />
            </Route>
        )}
      </div>
    </Switch>
  </Router>
);

export default AppRouter;
