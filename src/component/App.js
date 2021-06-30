import React, { Component } from "react";
import { observer, inject } from 'mobx-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChildCareIcon from '@material-ui/icons/ChildCare'; 
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AppRouter from "./AppRouter";

@inject('userInfoStore')
@observer
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      init: false,
    }

    this.setInit = this.setInit.bind(this);
  }

  componentDidMount() {
    const { setUserInfoOnAuthState } = this.props.userInfoStore;
    
    setUserInfoOnAuthState();
    this.setInit();
  }

  setInit = () => {
    this.setState({ init: true });
  };

  render() {
    const { isLoggedIn, userInfo, logOut } = this.props.userInfoStore;
    
    return (
      <>
        {this.state.init ? (
          <AppRouter isLoggedIn={isLoggedIn} userObj={userInfo} onClickLogoutBtn={logOut} />
        ): (
          <>
            <div className="progress-box">
              <div className="icon-box">
                <ChildCareIcon fontSize="large" />
                <LocalAtmIcon fontSize="large" />
                <ChildCareIcon fontSize="large" />
              </div> 
              <CircularProgress size={70} />
            </div>
          </>
        )}
      </>
    );
  }
}

export default App;
