import { Console } from '@woowacourse/mission-utils';
import { message } from '../consts.js';

const InputView = {
  async readPurchaseAmout() {
    const purchaseAmount = await Console.readLineAsync(message.purchaseAmount);
    return purchaseAmount;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(message.winningNumbers);
    return winningNumbers;
  },

  async readBonusNubmer() {
    const bonusNumber = await Console.readLineAsync(message.bonusNumber);
    return bonusNumber;
  },
};

export default InputView;
