import { ERROR } from './Constant.js'

class WinningNumbers{
  #numbers;
  #bonus;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  addBonusNumber(bonus) {
    this.#validateBonusNumber(bonus);
    this.#bonus = bonus;
  }

  #validateNumbers(numbers) {
    const numberArray = Object.values(numbers);
    if (numberArray.length !== 6) {
      throw new Error(ERROR.WINNING_NUMBER_NOT_SIX);
    }

    const numberSet = new Set(numberArray);
    if (numbers.length !== numberSet.size) {
      throw new Error(ERROR.WINNING_NUMBER_IS_REDUNDANT);
    }
  }

  #validateBonusNumber(bonus) {

  }
}