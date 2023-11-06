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
    }
    for (let number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error(Messages.ERROR_NUMBER_OUT_OF_RANGE);
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
