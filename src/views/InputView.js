import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

class InputView {
  static getLottoPrice() {
    return Console.readLineAsync(`${Messages.LOTTO_PRICE_INPUT}\n`);
  }

  static getWinningNumbers() {
    return Console.readLineAsync(`\n${Messages.WINNING_NUMBERS_INPUT}\n`);
  }

  static getBonusNumber() {
    return Console.readLineAsync(`\n${Messages.BONUS_NUMBER_INPUT}\n`);
  }
}

export default InputView;
