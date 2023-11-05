import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const InputView = {
  async readPurchaseAmount() {
    return await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
  },
};

export default InputView;
