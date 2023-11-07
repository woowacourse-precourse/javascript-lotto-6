import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constants/Message.js';
import { SETTING } from '../constants/Constant.js';

class LottoData {
  constructor(amount) {
    this.amount = amount;
    this.count = amount / SETTING.unit;
    this.lottos = [];
    // this.lotto = new Lotto();
    this.#validatePurchaseAmount(amount);
  }

  #validatePurchaseAmount(amount) {
    if (!/^\d+$/.test(amount)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    if (amount === '0' || amount % SETTING.unit !== 0) {
      throw new Error(ERROR_MESSAGE.notDivide);
    }
  }

  getLottos() {
    for (let i = 0; i < this.count; i++) {
      const numbers = this.generateLotto();
      this.lottos.push(numbers);
    }
    return { count: this.count, lottos: this.lottos };
  }

  generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(SETTING.start, SETTING.end, SETTING.pick);
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoData;
