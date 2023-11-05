import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages.js';

const InputView = {
  async readPurchaseAmount() {
    return Number(await Console.readLineAsync(MESSAGES.purchaseAmountQuery));
  },
};

export default InputView;
