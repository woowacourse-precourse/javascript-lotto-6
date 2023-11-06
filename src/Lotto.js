import { ERROR_MSG } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MSG.NOT_SIX_NUMBER);
    numbers.forEach((number) => {
      if (!(number >= 1 && number <= 45)) throw new Error(ERROR_MSG.ONE_TO_FOURTYFIVE_ERR);
      if (Number.isNaN(number)) throw new Error(ERROR_MSG.NOT_NUMBER_ERR);
    });

    this.NUMBERS_SET = new Set(numbers);
    if (this.NUMBERS_SET.size !== 6) throw new Error(ERROR_MSG.DUPLICATE_ERR);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
