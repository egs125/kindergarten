import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "../routes/Auth";
import Main from "../routes/Main";
import Navigation from "../routes/Navigation";

const AppRouter = ({ isLoggedIn, useObj }) => (
  <Router>
    {isLoggedIn && <Navigation />}
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
);

// const AppRouter = ({ isLoggedIn, userObj }) => {
//   return (
//     <Router>
//       {isLoggedIn && <Navigation />}
//       <Switch>
//         {isLoggedIn ? (
//           <>
//             <Route exact path="/">
//               <Home userObj={userObj} />
//             </Route>
//             <Route exact path="/profile">
//               <Profile />
//             </Route>
//           </>
//         ) : (
//           <Route exact path="/">
//             <Auth />
//           </Route>
//         )}
//       </Switch>
//     </Router>
//   );
// };

export default AppRouter;
