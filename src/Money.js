import Validator from './utils/vaildators';
import { CONSTANT } from './constants/constants';

class Money {
  #money;
  #purchaseCount;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.#setPurchaseCount(money);
  }

  #validate(money) {
    Validator.isNaN(money);
    Validator.isDouble(money);
    Validator.isDivisibleBy1000(money);
  }

  #setPurchaseCount(money) {
    this.#purchaseCount = money / CONSTANT.ONE_THOUSAND;
  }

  getPurchaseCount() {
    return this.#purchaseCount;
  }
}

export default Money;
