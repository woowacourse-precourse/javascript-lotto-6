/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';

const InputView = {
  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
    return purchaseAmount;
  },

  async inputWinningNumber() {
    const winningNumber = await Console.readLineAsync(INPUT_MESSAGE.winningNumber);
    return winningNumber;
  },
};

export default InputView;
