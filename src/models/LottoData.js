import { ERROR_MESSAGE } from '../constants/Message.js';
import { LOTTO } from '../constants/Constant.js';
import Lotto from '../Lotto.js';

class LottoData {
  constructor(amount) {
    this.amount = amount;
    this.count = amount / LOTTO.unit;
    this.lottos = [];
    // this.lotto = new Lotto();
    this.validatePurchaseAmount(amount);
  }

  validatePurchaseAmount(amount) {
    if (!/^\d+$/.test(amount)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    if (amount === '0' || amount % LOTTO.unit !== 0) {
      throw new Error(ERROR_MESSAGE.notDivide);
    }
  }

  getCount() {
    return this.count;
  }

  getLottos() {
    for (let i = 0; i < this.count; i++) {
      const numbers = new Lotto().generateLotto();
      this.lottos.push(numbers);
    }
    return { count: this.count, lottos: this.lottos };
  }
}

export default LottoData;
