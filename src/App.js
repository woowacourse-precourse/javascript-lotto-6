import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './constants/messages.js';
import PerchaseAmount from './PerchaseAmount.js';

class App {
  constructor() {
    this.perchaseAmount = new PerchaseAmount();
  }

  async play() {
    const purchaseAmount = await Console.readLineAsync(MESSAGES.purchaseAmount);
    this.perchaseAmount.validate(purchaseAmount);
  }
}

export default App;
