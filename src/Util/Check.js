import Constants from "./Constants.js";

export default class Check {
  money(amount) {
    const unit = 1000;
    if (amount % unit || isNaN(amount)) throw new Error(Constants.error.money);
    return amount;
  }
}
