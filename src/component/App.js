import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import { authService } from "fBase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogoutBtn = () => {
    try {
      authService.signOut()
        .then(() => {
          setUserObj(null);
          setIsLoggedIn(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
        setIsLoggedIn(true);
      }

      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? 
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} onClickLogoutBtn={onClickLogoutBtn} /> 
        : "Initializing..."}
    </>
  );
}

export default App;
