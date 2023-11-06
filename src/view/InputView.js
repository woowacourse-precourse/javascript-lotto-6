import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  readPurchaseAmount: async () => {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.read.purchaseAmount);

    return purchaseAmount;
  },
};

export default InputView;
