import { ERROR, LOTTERY } from './constants.js';
import { AlertError } from './utils/AlertError.js';

export default class InputValidation {
  static checkPurchaseAmount(input) {
    if (input.length === 0) throw new AlertError(ERROR.BLANK_INPUT);
    const num = Number(input);
    if (Number.isNaN(num)) throw new AlertError(ERROR.NOT_A_NUMBER);
    if (num <= 0) throw new AlertError(ERROR.NOT_A_NATURAL_NUMBER);
    if (num % LOTTERY.PRICE !== 0) throw new AlertError(ERROR.NOT_DIVIDED_BY_THOUSAND);
  }

  static checkWinningNumbers(input) {
    if (input.length === 0) throw new AlertError(ERROR.BLANK_INPUT);
    const arr = input.split(',').map(Number);
    if (arr.some((num) => Number.isNaN(num))) throw new AlertError(ERROR.NOT_A_NUMBER);
    if (
      !arr.every((num) => {
        return num >= LOTTERY.MIN_NUM && num <= LOTTERY.MAX_NUM;
      })
    )
      throw new AlertError(ERROR.OUT_OF_RANGE(LOTTERY.MIN_NUM, LOTTERY.MAX_NUM));
    if (arr.length !== LOTTERY.NUM_COUNT) throw new AlertError(ERROR.NOT_SIX_NUMBERS);
    if (new Set(arr).size !== LOTTERY.NUM_COUNT) throw new AlertError(ERROR.NOT_SIX_NUMBERS);
  }

  static checkBonusNumber(winningNumbers, input) {
    if (input.length === 0) throw new AlertError(ERROR.BLANK_INPUT);
    const num = Number(input);
    if (Number.isNaN(num)) throw new AlertError(ERROR.NOT_A_NUMBER);
    if (winningNumbers.includes(num)) throw new AlertError(ERROR.ALREADY_SELECTED);
  }
}
