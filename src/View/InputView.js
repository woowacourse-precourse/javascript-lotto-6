import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const InputView = {
  async readPurchaseAmount() {
    return Number(await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT));
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBERS
    );

    return winningNumbers.split(',');
  },

  async readBonusNumber() {
    return Number(await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER));
  },
};

export default InputView;
