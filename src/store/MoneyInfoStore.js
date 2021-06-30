import { observable, computed, action, toJS } from 'mobx';

class MoneyInfoStore {

  @observable
  wishList = [];

  @computed
  get getWishList() {
    return toJS(this.wishList);
  }

}

const moneyInfoStore = new MoneyInfoStore();
export default moneyInfoStore;
