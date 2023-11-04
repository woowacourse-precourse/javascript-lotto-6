import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './constants/messages.js';
import isValidPerchaseAmount from './utils/validator.js';

class App {
  constructor() {}

  async play() {
    const purchaseAmount = await Console.readLineAsync(MESSAGES.purchaseAmount);
    isValidPerchaseAmount(purchaseAmount);
    const perchaseQuentity = parseInt(purchaseAmount / 1000, 10);
    Console.print(`${perchaseQuentity}${MESSAGES.purchaseQuantity}`);
  }
}

export default App;
