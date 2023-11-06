import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/Messages.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);

    return purchaseAmount;
  },
};

export default InputView;
