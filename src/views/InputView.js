import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

class InputView {
  static getLottoPrice() {
    return Console.readLineAsync(`${Messages.LOTTO_PRICE}\n`);
  }

  static getWinningNumbers() {
    return Console.readLineAsync(`\n${Messages.WINNING_NUMBERS}\n`);
  }

  static getBonusNumber() {
    return Console.readLineAsync(`\n${Messages.BONUS_NUMBER}\n`);
  }
}

export default InputView;
