import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';

const OutputView = {
  printPurchaseQuantity(quantity) {
    Console.print(`\n${MESSAGE.purchasedQuantity(quantity)}`);
  },
};

export default OutputView;
