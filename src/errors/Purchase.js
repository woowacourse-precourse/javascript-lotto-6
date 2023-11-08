import { ERROR_MESSAGE } from "../Constants.js";
class Purchase {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (Number(amount) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVISIBLE_BY_1000);
    }
  }
}

export default Purchase;
