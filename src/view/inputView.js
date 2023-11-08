import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const inputView = {
  async purchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_AMOUNT,
    );
    return purchaseAmount;
  },

  async winningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBERS,
    );
    return winningNumbers;
  },
};

export default inputView;
