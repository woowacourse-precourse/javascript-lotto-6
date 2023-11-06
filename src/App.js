import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';

const CURRENCY_UNIT = 1000;
const input = new Input();

class App {
  async play() {
    const purchaseAmount = await input.askPurchaseAmount();
    const parsedpurchaseAmount = parseInt(purchaseAmount, 10);
  }
}

export default App;
