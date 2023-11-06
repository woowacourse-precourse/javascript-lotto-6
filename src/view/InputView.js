import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  readPurchaseAmount: async () => {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.read.purchaseAmount);

    return purchaseAmount;
  },
  readWinningNumbers: async () => {
    const winningNumbers = await Console.readLineAsync(MESSAGE.read.winningNumbers);

    return winningNumbers;
  },
};

export default InputView;
