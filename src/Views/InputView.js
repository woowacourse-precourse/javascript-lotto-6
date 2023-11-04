import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(MESSAGES.purchaseAmountQuery);
    return purchaseAmount.replace(MESSAGES.comma, '');
  },
};

export default InputView;
