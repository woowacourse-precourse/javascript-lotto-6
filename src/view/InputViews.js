import { Console } from '@woowacourse/mission-utils';
import { message } from '../consts';

const InputView = {
  async readPurchaseAmout() {
    const purchaseAmount = await Console.readLineAsync(message.purchaseAmount);
    return purchaseAmount;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(message.winningNumbers);
    return winningNumbers;
  },
};

export default InputView;
