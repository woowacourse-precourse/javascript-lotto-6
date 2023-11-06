import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';

const CURRENCY_UNIT = 1000;
const input = new Input();

class App {
  async play() {
    const purchaseAmount = await input.askPurchaseAmount();
    const parsedpurchaseAmount = parseInt(purchaseAmount, 10);

    this.validateAskPurchaseAmount(parsedpurchaseAmount);
  }

  validateAskPurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount) || purchaseAmount === 0) {
      throw new Error('[ERROR] 입력된 값을 확인해주세요.');
    }

    if (purchaseAmount % CURRENCY_UNIT) {
      throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');
    }
  }
}

export default App;
