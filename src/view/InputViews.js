import { Console } from '@woowacourse/mission-utils';
import { message } from '../consts';

const InputView = {
  async readPurchaseAmout() {
    const purchaseAmount = await Console.readLineAsync(message.purchaseAmount);
    return purchaseAmount;
  },
};

export default InputView;
