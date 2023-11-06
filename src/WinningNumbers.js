import { ERROR } from './Constant.js'
import { Console } from "@woowacourse/mission-utils";

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

    numberArray.forEach((number) => {
      number = Number(number);
      if(number < 1 || number > 45) throw new Error(ERROR.WINNING_NUMBER_NOT_IN_VALID_RANGE);
    });

    const numberSet = new Set(numberArray);
    if (numbers.length !== numberSet.size) {
      throw new Error(ERROR.WINNING_NUMBER_IS_REDUNDANT);
    }
  }

  #validateBonusNumber(bonus) {
    bonus = Number(bonus);
    if(bonus < 1 || bonus > 45) throw new Error(ERROR.BONUS_NUMBER_NOT_IN_VALID_RANGE);
  }
}

export default WinningNumbers;