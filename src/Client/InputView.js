/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';

const InputView = {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
    return purchaseAmount;
  },
};

export default InputView;
