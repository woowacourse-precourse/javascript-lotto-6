import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GET } from '../constants/Message';

const InputView = {
  getPurchaseLottoAmount() {
    return Console.readLineAsync(MESSAGE_GET.PURCHASE_AMOUNT);
  },

  getWinningNumbers() {
    return Console.readLineAsync(MESSAGE_GET.WINNING_NUMBER);
  },

  getBonusNumber() {
    return Console.readLineAsync(MESSAGE_GET.BONUS_NUMBER);
  },
};

export default InputView;
