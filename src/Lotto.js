import { ErrorMessage } from "./Messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessage.ERROR_INVALID_LENGTH);
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(ErrorMessage.ERROR_DUPLICATE_NUMBERS);
    }

    if (uniqueNumbers.size !== 6)
      for (let number of uniqueNumbers) {
        if (number < 1 || number > 45) {
          throw new Error(ErrorMessage.ERROR_INVALID_RANGE);
        }
      }

    if (numbers.some((number) => !Number.isInteger(Number(number))))
      throw new Error(ErrorMessage.ERROR_NOT_NUMBER);
  }

  // getNumbers() {
  //   return this.#numbers;
  // }
}

export default Lotto;
