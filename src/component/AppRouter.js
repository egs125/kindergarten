import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from '@material-ui/core';

import Auth from "../routes/Auth";
import Main from "../routes/Main";
import Navigation from "../routes/Navigation";

const AppRouter = ({ isLoggedIn, useObj, onClickLogoutBtn }) => (
  <div className="root-container">
    <Grid container>
      <Grid item xs={12}>
        <Navigation onClickLogoutBtn={onClickLogoutBtn} />
      </Grid>
      <Grid item xs={12}>
        <Router>
          <Switch>
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
          </Switch>
        </Router>
      </Grid>
    </Grid>
  </div>
);

export default AppRouter;
