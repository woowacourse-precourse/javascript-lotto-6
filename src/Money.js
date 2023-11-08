import { ERRORS } from "./contants.js";

class Money {
  #money;

  constructor(money) {
    this.#money = money;
    this.#validate();
  }

  #validate() {
    if (isNaN(this.#money)) {
      throw new Error(ERRORS.NOT_NUMBER);
    }
    if (this.#money % 1000 !== 0) {
      throw new Error(ERRORS.UNFORMATTED_NUMBER);
    }
  }

  getMoney() {
    return this.#money;
  }
}

export default Money;
