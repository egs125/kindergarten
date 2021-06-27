import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from '@material-ui/core';

import Navigation from "routes/Navigation";
import Auth from "routes/Auth";
import Main from "routes/Main";
import WishList from "routes/WishList";

const AppRouter = ({ isLoggedIn, userObj, onClickLogoutBtn }) => (
  <div className="root-container">
    <Grid container>
      <Router>

        <Route render={props => (<Navigation isLoggedIn={isLoggedIn} onClickLogoutBtn={onClickLogoutBtn} {...props} />)} />
        
        <Grid item xs={12}>
          <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/" render={props => (<Main userObj={userObj} {...props} />)} />
              <Route exact path="/wishlist" render={props => (<WishList userObj={userObj} {...props} />)} />
            </>
          ) : (
              <Route exact path="/" component={Auth} />
          )}
          </Switch>
        </Grid>
        
      </Router>
    </Grid>
  </div>
);

export default AppRouter;
