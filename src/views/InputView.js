import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GET } from '../constants/Mesaage';

class InputView {
  static getPurchaseAmount() {
    return Console.readLineAsync(MESSAGE_GET.PURCHASE_AMOUNT);
  }

  static getWinningNumber() {
    return Console.readLineAsync(MESSAGE_GET.WINNING_NUMBER);
  }

  static getBonusNumber() {
    return Console.readLineAsync(MESSAGE_GET.BONUS_NUMBER);
  }
}

export default InputView;
