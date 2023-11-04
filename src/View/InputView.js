import { Console } from '@woowacourse/mission-utils';
import { ERROR, INPUT } from '../constant/index';

class InputView {
  static async readBuyingPrice() {
    const input = await Console.readLineAsync(INPUT.BUYING_PRICE);
    InputView.#validateBuyingPrice(input);
    return Number(input);
  }

  static #validateBuyingPrice(input) {
    if (!/^[1-9][0-9]*$/.test(input)) {
      throw new Error(ERROR.NUMBERS_GREATER_THAN_ZERO);
    }

    if (Number(input) % 1000 !== 0) {
      throw new Error(ERROR.BUYING_PRICE_UNIT);
    }
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync(INPUT.WINNING_NUMBERS);
    InputView.#validateWinningNumbers(input);
    return input.split(',').map(Number);
  }

  static #validateWinningNumbers(input) {
    const numbers = input.split(',').map(number => number.trim());

    if (numbers.length !== 6) {
      throw new Error(ERROR.WINNING_NUMBERS_LENGTH);
    }

    const INVALID_RANGE = numbers.some(number => number < 1 || number > 45);
    if (INVALID_RANGE) {
      throw new Error(ERROR.WINNING_NUMBERS_RANGE);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(ERROR.WINNING_NUMBERS_UNIQE);
    }
  }

  static async readBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(INPUT.BONUS_NUMBERS);
    InputView.#validateBonusNumber(input, winningNumbers);
    return Number(input);
  }

  static #validateBonusNumber(input, winningNumbers) {
    if (!/^[1-9][0-9]*$/.test(input)) {
      throw new Error(ERROR.BONUS_NUMBER_INTEGER);
    }

    if (input < 1 || input > 45) {
      throw new Error(ERROR.BONUS_NUMBER_RANGE);
    }

    if (winningNumbers.includes(Number(input))) {
      throw new Error(ERROR.BONUS_NUMBER_UNIQUE);
    }
  }
}

export default InputView;
