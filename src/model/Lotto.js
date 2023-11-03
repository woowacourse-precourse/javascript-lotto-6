import Messages from "../messages/Messages.js";
import Constants from "../constants/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async setNumbers(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    const messages = new Messages();
    const constants = new Constants();
    if (numbers.length !== constants.getLottoNumberCount()) {
      throw new Error(messages.getErrorMsg("notSix"));
    }
    if (numbers.some((num) => this.#checkArange(num))) {
      throw new Error(messages.getErrorMsg("outOfindex"));
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(messages.getErrorMsg("overlap"));
    }
    if (numbers.some((number) => typeof number !== "number")) {
      throw new Error(messages.getErrorMsg("notNumber"));
    }
  }

  #checkArange(number) {
    const constants = new Constants();
    return (number) =>
      number < constants.getLottoNumberMin() ||
      number > constants.getLottoNumberMax();
  }
}

export default Lotto;
