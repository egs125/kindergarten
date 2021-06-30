import { observable, computed, action, toJS } from 'mobx';

class UserInfoStore {

  @observable
  userInfo = {};
  
}

const userInfoStore = new UserInfoStore();
export default userInfoStore;