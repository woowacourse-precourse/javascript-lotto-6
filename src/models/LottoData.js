import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constants/Message.js';
import { SETTING, RATE } from '../constants/Constant.js';

class LottoData {
  constructor(amount) {
    this.amount = amount;
    this.count = amount / SETTING.unit;
    this.lottos = [];
    this.lottoStats = { 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };
    this.winningAmount = 0;
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

  lottoIssuance() {
    for (let i = 0; i < this.count; i++) {
      this.lottos.push(this.generateLotto());
    }
    return { count: this.count, lottos: this.lottos };
  }

  generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(SETTING.start, SETTING.end, SETTING.pick);
    return numbers.sort((a, b) => a - b);
  }

  getLottos() {
    return this.lottos;
  }

  setLottoStats(stats) {
    this.lottoStats = stats;
  }

  getLottoStats() {
    return this.lottoStats;
  }

  getProfit() {
    return this.calculateProfit();
  }

  calculateProfit() {
    Object.keys(this.lottoStats).forEach((key) => {
      this.winningAmount += this.lottoStats[key] * RATE[key];
    });
    return ((this.winningAmount / this.amount) * 100).toFixed(1);
  }
}

export default LottoData;
