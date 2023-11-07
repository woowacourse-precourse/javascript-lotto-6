import { Console } from '@woowacourse/mission-utils';
import { MESSAGE_GET } from '../constants/Message';

const InputView = {
  async getPurchaseLottoAmount() {
    return Console.readLineAsync(MESSAGE_GET.PURCHASE_AMOUNT);
  },

  async getWinningNumbers() {
    return Console.readLineAsync(MESSAGE_GET.WINNING_NUMBER);
  },

  async getBonusNumber() {
    return Console.readLineAsync(MESSAGE_GET.BONUS_NUMBER);
  },
};

export default InputView;
