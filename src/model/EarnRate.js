import { ERROR_MESSAGE } from "../constants/errors.js";

class EarnRate {
  #number;

  constructor(number) {
    this.#number = number;
    this.#roundToPrecision(number);
  }

  #roundToPrecision(number) {
    if ((number * 100) % 10 !== 0) {
      throw new Error(ERROR_MESSAGE.incorrectPrecision);
    }
  }
}

export default EarnRate;
