import Lotto from './Lotto.js';
import { PurchaseLotto } from './PurchaseLotto.js';
import { randomNum } from './utils.js';
import { GRADING_COUNT, LOTTO_NUMBERS, LOTTO_PRIZE_MONEY } from './constants.js';

class GameExport {
  #lottos;

  constructor() {
    this.#lottos = [];
    this.purchaseLotto = new PurchaseLotto();
  }

  makeLotto(lottoNumbers) {
    const lotto = new Lotto(lottoNumbers);
    this.#lottos.push(lotto);
  }

  async lottoCount() {
    await this.purchaseLotto.initialize();
    return this.purchaseLotto.getLottoCount();
  }

  async createLotto() {
    const count = await this.lottoCount();

    for (let i = 0; i < count; i++) {
      let lottoNumbers = randomNum();
      lottoNumbers = lottoNumbers.sort((numA, numB) => numA - numB);
      this.makeLotto(lottoNumbers);
    }
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }

  async viewLottoList() {
    const theLottoList = await this.createLotto();
    return theLottoList.map((item) => `[${item.join(', ')}]`).join(`\n`);
  }

  getEachCompareResult(inputNumbers, bonusNumber) {
    return this.#lottos.map((lotto) => lotto.getCompareResult(inputNumbers, bonusNumber));
  }

  getStatistics(eachCompareResult) {
    const statistics = {
      FIFTH_PRIZE: 0,
      FOURTH_PRIZE: 0,
      THIRD_PRIZE: 0,
      SECOND_PRIZE: 0,
      FIRST_PRIZE: 0,
    };

    eachCompareResult.forEach(({ matchCount, hasBonusNumber }) => {
      if (matchCount === GRADING_COUNT.FIRST_PRIZE) statistics.FIRST_PRIZE += 1;
      if (matchCount === GRADING_COUNT.SECOND_PRIZE && hasBonusNumber) statistics.SECOND_PRIZE += 1;
      if (matchCount === GRADING_COUNT.THIRD_PRIZE && !hasBonusNumber) statistics.THIRD_PRIZE += 1;
      if (matchCount === GRADING_COUNT.FOURTH_PRIZE) statistics.FOURTH_PRIZE += 1;
      if (matchCount === GRADING_COUNT.FIFTH_PRIZE) statistics.FIFTH_PRIZE += 1;
    });

    return statistics;
  }

  getTotalPrizeMoney(statistics) {
    return Object.entries(statistics).reduce((acc, [prize, count]) => acc + LOTTO_PRIZE_MONEY[prize] * count, 0);
  }

  getPriceEarningsRatio(totalPrizeMoney) {
    const purchaseAmount = this.#lottos.length * LOTTO_NUMBERS.PAY_LOTTO_MONEY;

    return (totalPrizeMoney / purchaseAmount) * 100;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default GameExport;
