import { errorMessage } from './Consts.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.numbersArray = [];
  }

  static numbers(numbers) {
    return numbers.split(',');
  }

  #validate(numbers) {
    this.numbersArray = Lotto.numbers(numbers);
    this.checkLength();
    this.checkType();
    this.checkRange();
    this.checkDuplicated();
    this.checkWhiteSpace();
  }

  checkLength() {
    if (this.numbersArray.length !== 6) {
      throw new Error(errorMessage.winningNumbersCount);
    }
  }

  checkType() {
    if (this.numbersArray.some(number => Number.isNaN(Number(number)))) {
      throw new Error(errorMessage.winningNumbersNotNumber);
    }
  }

  checkRange() {
    if (this.numbersArray.some(number => Number(number) < 1 || Number(number) > 45)) {
      throw new Error(errorMessage.winningNumbersRange);
    }
  }

  checkDuplicated() {
    if (new Set(this.numbersArray).size !== 6) {
      throw new Error(errorMessage.duplicatedWinningNumbers);
    }
  }

  checkWhiteSpace() {
    if (this.numbersArray.some(number => number.includes(' '))) {
      throw new Error(errorMessage.whiteSpace);
    }
  }
}

export default Lotto;
