import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constant.js';

const InputView = {
  async readAmount() {
    const amount = await Console.readLineAsync(MESSAGE.enterAmount);
    return amount;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(MESSAGE.enterWinning);
    return winningNumbers;
  },
};

export default InputView;
