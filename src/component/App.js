import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import { authService } from "fBase";
import { Container } from '@material-ui/core';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }

      setInit(true);
    });
  }, []);

  return (
    <Container maxWidth="xs" style={{ display: 'flex', justifyContent: 'center' }}>
      {init ? 
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> 
        : "Initializing..."}
    </Container>
  );
}

export default App;
