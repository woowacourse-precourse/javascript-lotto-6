import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from '../Constants/Message.js';
import { validatePurchaseAmount } from '../Validator/Validate.js';

const View = {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(SYSTEM_MESSAGE.INPUT_PURCHASE_AMOUNT);
    validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  },
  printCountOfLotto(countOfLotto) {
    Console.print(countOfLotto + SYSTEM_MESSAGE.PURCHASE_LOTTO_MESSAGE);
  },
};

export default View;
