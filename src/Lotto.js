import validator from "./utils/validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (Array.isArray(numbers)) {
      validator.validateArray(numbers);
    }

    if (typeof numbers === "string") {
      validator.validateString(numbers);
    }

    if (typeof numbers === "number") {
      validator.validateNumber(numbers);
    }
  }
}

export default Lotto;
