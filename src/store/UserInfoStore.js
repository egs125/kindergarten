import { observable, computed, action, toJS } from 'mobx';
import { authService } from "fBase";

class UserInfoStore {


  @observable
  isLoggedIn = false;

  @observable
  userInfo = {};

  @action
  logOut = () => {
    authService.signOut()
      .then(() => {
        this.userInfo = {};
        this.isLoggedIn = false;
      });
  };

  @action
  setUserInfoOnAuthState = () => {
    authService.onAuthStateChanged(user => {
      if (user) {
        this.userInfo = user;
        this.isLoggedIn = true;
      }
    });
  };

}

const userInfoStore = new UserInfoStore();
export default userInfoStore;