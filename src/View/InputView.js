import { Console } from '@woowacourse/mission-utils';
import { ERROR, INPUT } from '../constant/index.js';

class InputView {
  static async readBuyingPrice() {
    const input = await Console.readLineAsync(INPUT.BUYING_PRICE);
    return input;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync(INPUT.WINNING_NUMBERS);
    return input;
  }

  static async readBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(INPUT.BONUS_NUMBERS);
    InputView.#validateBonusNumber(input, winningNumbers);
    return Number(input);
  }

  static #validateBonusNumber(input, winningNumbers) {
    if (!/^[1-9][0-9]*$/.test(input)) {
      throw new Error(ERROR.BONUS_NUMBER.NUMBER);
    }

    if (input < 1 || input > 45) {
      throw new Error(ERROR.BONUS_NUMBER.RANGE);
    }

    if (winningNumbers.includes(Number(input))) {
      throw new Error(ERROR.BONUS_NUMBER.UNIQUE);
    }
  }
}

export default InputView;
