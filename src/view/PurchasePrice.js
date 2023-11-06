import { Console } from '@woowacourse/mission-utils';
import { INPUT_PURCHASE_PRICE } from '../constant/InputMessage.js';

const PurchasePrice = {
  async getLottoPurchasePrice() {
    return await Console.readLineAsync(INPUT_PURCHASE_PRICE);
  },
};

export default PurchasePrice;
