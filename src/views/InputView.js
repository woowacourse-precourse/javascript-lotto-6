import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GET } from '../constants/Mesaage';

const InputView = {
  getPurchaseAmount() {
    return Console.readLineAsync(MESSAGE_GET.PURCHASE_AMOUNT);
  },

  getWinningNumber() {
    return Console.readLineAsync(MESSAGE_GET.WINNING_NUMBER);
  },

  getBonusNumber() {
    return Console.readLineAsync(MESSAGE_GET.BONUS_NUMBER);
  },
};

export default InputView;
