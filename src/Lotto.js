import { errorMessage } from './Consts.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.numbersArray = [];
  }

  static numbersToArray(numbers) {
    return numbers.split(',');
  }

  #validate(numbers) {
    this.numbersArray = Lotto.numbersToArray(numbers);
    this.checkLength(this.numbersArray);
    this.checkType(this.numbersArray);
    this.checkRange(this.numbersArray);
    this.checkDuplicated(this.numbersArray);
    this.checkWhiteSpace(this.numbersArray);
  }

  checkLength(numbersArray) {
    if (numbersArray.length !== 6) {
      throw new Error(errorMessage.winningNumbersCount);
    }
  }

  checkType(numbersArray) {
    if (numbersArray.some(number => Number.isNaN(Number(number)))) {
      throw new Error(errorMessage.winningNumbersNotNumber);
    }
  }

  checkRange(numbersArray) {
    if (numbersArray.some(number => Number(number) < 1 || Number(number) > 45)) {
      throw new Error(errorMessage.winningNumbersRange);
    }
  }

  checkDuplicated(numbersArray) {
    if (new Set(numbersArray).size !== 6) {
      throw new Error(errorMessage.duplicatedWinningNumbers);
    }
  }

  checkWhiteSpace(numbersArray) {
    if (numbersArray.some(number => number.includes(' '))) {
      throw new Error(errorMessage.whiteSpace);
    }
  }
}

export default Lotto;
