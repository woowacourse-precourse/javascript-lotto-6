import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

const View = {
  readPurchaseAmount() {
    const userInput = Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.PURCHASE_AMOUNT,
    );

    return userInput;
  },

  async readWinningNumbers() {},

  async readBonusNumber() {}
};

export default View;
