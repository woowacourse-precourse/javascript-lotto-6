import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/Messages.js';
import checkEmptyString from '../utils/validators/index.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);

    checkEmptyString(purchaseAmount);

    return purchaseAmount;
  },
};

export default InputView;
