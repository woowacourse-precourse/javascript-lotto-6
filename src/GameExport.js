import Lotto from './Lotto.js';
import { PurchaseLotto } from './PurchaseLotto.js';
import { randomNum } from './utils.js';
import { GRADING_COUNT } from './constants.js';

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
    return this.#lottos.map((lotto) =>
      lotto.getCompareResult(inputNumbers, bonusNumber),
    );
  }

  getStatistics(eachCompareResult) {
    const statistics = {
      fifthPrize: 0,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
    };

    eachCompareResult.forEach(({ matchCount, hasBonusNumber }) => {
      if (matchCount === GRADING_COUNT.SIX) statistics.firstPrize += 1;
      if (matchCount === GRADING_COUNT.FIVE && hasBonusNumber)
        statistics.secondPrize += 1;
      if (matchCount === GRADING_COUNT.FIVE && !hasBonusNumber)
        statistics.thirdPrize += 1;
      if (matchCount === GRADING_COUNT.FOUR) statistics.fourthPrize += 1;
      if (matchCount === GRADING_COUNT.THREE) statistics.fifthPrize += 1;
    });

    console.log(statistics);
    return statistics;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default GameExport;
