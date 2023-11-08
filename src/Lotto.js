import Messages from './Messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Messages.ERROR_WINNING_NUMBER_NOT_ENOUGH);
    }
    for (let number of numbers) {
      if (isNaN(number)) {
        throw new Error(Messages.ERROR_ISNAN);
      }
      if (number < 1 || number > 45) {
        throw new Error(Messages.ERROR_NUMBER_OUT_OF_RANGE);
      }
    }
    let unique = new Set(numbers);
    if (unique.size !== numbers.length) {
      throw new Error(Messages.ERROR_WINNING_NUMBER_DUPLICATED);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
