class Validate {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  isSixNumbers(errorMessage) {
    if (this.#numbers.length !== 6) {
      Validate.#throwError(errorMessage);
    }
    return this;
  }

  isDuplicate(errorMessage) {
    if (new Set([...this.#numbers]).size !== this.#numbers.length) {
      Validate.#throwError(errorMessage);
    }
    return this;
  }

  isInteger(errorMessage) {
    if (!this.#numbers.every((number) => Number.isInteger(number))) {
      Validate.#throwError(errorMessage);
    }
    return this;
  }

  isInRange(errorMessage) {
    if (!this.#numbers.every((number) => number >= 1 && number <= 45)) {
      Validate.#throwError(errorMessage);
    }
    return this;
  }

  isMultipleThousand(errorMessage) {
    if (!this.#numbers.every((number) => number % 1000 === 0)) {
      Validate.#throwError(errorMessage);
    }
    return this;
  }

  isNumberNotInNumbers(tagetNumbers, errorMessage) {
    this.#numbers.forEach((number) => {
      if (tagetNumbers.includes(number)) {
        Validate.#throwError(errorMessage);
      }
    });
    return this;
  }

  static #throwError(errorMessage) {
    throw new Error(`[ERROR] ${errorMessage}`);
  }
}

export default Validate;
