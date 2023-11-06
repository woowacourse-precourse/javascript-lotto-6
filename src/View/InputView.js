import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import COMMON from '../constants/common.js';

class InputView {
  static async inputMoney() {
    const money = await Console.readLineAsync(MESSAGE.input.money);
    return Number(money);
  }

  static async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGE.input.winningNumber,
    );
    return InputView.#parseWinningNumbers(winningNumbers);
  }

  static #parseWinningNumbers(numbers) {
    const splitedNumbers = numbers.split(COMMON.comma);
    return splitedNumbers.map((number) => Number(number.trim()));
  }

  static async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.input.bonusNumber);
    return Number(bonusNumber);
  }
}

export default InputView;
