import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  readPurchaseAmount: async () => {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.read.purchaseAmount);

    return purchaseAmount;
  },
  readWinningNumbers: async () => {
    const input = await Console.readLineAsync(MESSAGE.read.winningNumbers);
    const winningNumbers = input.split(',').map(item => item.trim());

    return winningNumbers;
  },
};

export default InputView;
