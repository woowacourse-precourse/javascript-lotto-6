import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';

const InputView = {
  async readPurchaseAmount() {
    return await Console.readLineAsync(MESSAGE.enterPurchaseAmount);
  },

  async readWinningLotto() {
    return await Console.readLineAsync(MESSAGE.enterWinningNumbers);
  },

  async readBonusNumber() {
    return await Console.readLineAsync(MESSAGE.enterBonusNumber);
  },
};

export default InputView;
