import { errorMessage } from './Consts';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static numbersArray(numbers) {
    return numbers.split(',').map(Number);
  }

  #validate(numbers) {
    const numbersArray = Lotto.numbersArray(numbers);
    if (numbersArray.length !== 6) {
      throw new Error(errorMessage.winningNumbersCount);
    }
    if (numbersArray.some(number => Number.isNaN(Number(number)))) {
      throw new Error(errorMessage.winningNumbersNotNumber);
    }
    if (numbersArray.some(number => number < 1 || number > 45)) {
      throw new Error(errorMessage.winningNumbersRange);
    }
    if (new Set(numbersArray).size !== 6) {
      throw new Error(errorMessage.duplicatedWinningNumbers);
    }
  }
}

export default Lotto;
