import MESSAGE from "../constants/MESSAGE.js";
import VALIDATE from "../constants/VALIDATE.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }
  #validate(numbers) {
  }
}

export default Lotto;
