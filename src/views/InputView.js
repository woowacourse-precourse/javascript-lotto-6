import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../utils/constants.js';

const InputView = {
  async getPurchaseAmount() {
    const amount = await Console.readLineAsync(INPUT_MESSAGE.INPUT_MONEY);
    return amount;
  },

  async getWinningNumber() {
    const winningNumber = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_WINNING_NUMBERS
    );
    return winningNumber;
  },

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_BONUS_NUMBER
    );
    return bonusNumber;
  },
};

export default InputView;
