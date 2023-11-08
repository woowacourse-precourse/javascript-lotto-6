import { BalanceTypeError } from '../error/CustomErrors.js';
import REGEXP from '../constants/RegExp.js';

export default class Balance {
  #balance

  constructor(balance) {
    this.#validate(balance);
    this.#balance = balance;
  }

  #validate(number) {
    if (!REGEXP.balance.test(number)) {
      throw new BalanceTypeError(number);
    }
  }

  get() {
    return this.#balance;
  }
}