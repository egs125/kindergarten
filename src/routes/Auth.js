import React, { useState } from "react";
import { firebaseInstance, authService } from "fBase";
import { Grid, CssBaseline, TextField, Button } from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare'; 
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onClickSocial = async (name) => {
    let provider;

    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    await authService.signInWithPopup(provider);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ChildCareIcon fontSize="large" />
        <LocalAtmIcon fontSize="large" />
        <ChildCareIcon fontSize="large" />
      </Grid>
      <CssBaseline />
      <Grid item xs={12}>
        <TextField
          name="email"
          type="text"
          label="Email address"
          required
          value={email}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="password"
          type="password"
          label="password"
          required
          value={password}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" size="large">Sign In</Button>
      </Grid>

      {/* <Grid container xs={12} spacing={2}>
        <Grid item xs>
          <Button variant="contained" color="primary" size="large">{newAccount ? "Create Account" : "Log in"}</Button>
          <Button variant="contained" color="primary" size="large">{newAccount ? "Sign In" : "Create Account"}</Button>
        </Grid>
      </Grid> */}

      <Grid item xs={12}>
        <Button variant="contained" size="large" onClick={() => onClickSocial('google')}>Continue with Google</Button>
      </Grid>
    </Grid>
  );
};

export default Auth;
