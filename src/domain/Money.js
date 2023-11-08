import { ERROR_MESSAGE } from "../constants/messages.js";
import REGEX from "../constants/Regex.js";

class Money {
  #amount = 0;

  constructor(amount) {
    Money.#validatePositiveInt(amount);
    this.#amount = Money.#parse(amount);
  }

  getAmount() {
    return this.#amount;
  }

  static #validatePositiveInt(value) {
    if (!REGEX.onlyInt.test(value) && value > 0) {
      throw new Error(ERROR_MESSAGE.notPostiveInt);
    }
  }

  static #parse(value) {
    return parseInt(value, 10);
  }
}

export default Money;
