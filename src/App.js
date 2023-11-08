import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import CONSTANTS from './constants/Constants.js';
import LOTTO_PRIZE from './constants/LottoPrize.js';
import { sortArray } from './utils/arrayUtils.js';
import {
  printLottoResult,
  printPurchaseLottoInfo,
  readBonusNumber,
  readPurchaseLottos,
  readWinningNumbers,
} from './utils/view.js';

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = null;
    this.bonusNumber = null;

    this.totalPrize = CONSTANTS.DEFAULT_VALUE;
    this.matchCount = {
      first: CONSTANTS.DEFAULT_VALUE,
      second: CONSTANTS.DEFAULT_VALUE,
      third: CONSTANTS.DEFAULT_VALUE,
      fourth: CONSTANTS.DEFAULT_VALUE,
      fifth: CONSTANTS.DEFAULT_VALUE,
    };
  }

  async setPurchaseLottos() {
    const purchaseLottoCount = await readPurchaseLottos();

    let i;

    for (i = 0; purchaseLottoCount > i; i += 1) {
      const numbers = sortArray(Random.pickUniqueNumbersInRange(1, 45, 6));

      this.lottos.push(new Lotto(numbers));
    }
  }

  async setWinningLotto() {
    this.winningNumbers = await readWinningNumbers();
    this.bonusNumber = await readBonusNumber(this.winningNumbers);
  }

  async setLottoConfig() {
    await this.setPurchaseLottos();
    printPurchaseLottoInfo(this.lottos);

    await this.setWinningLotto();
  }

  getPrize(lotto) {
    const [matchCount, isMatchBonus] = lotto.matchLotto(
      this.winningNumbers,
      this.bonusNumber,
    );

    const prize = Object.keys(LOTTO_PRIZE).find(
      key =>
        LOTTO_PRIZE[key].CONDITION.matchCount === matchCount &&
        LOTTO_PRIZE[key].CONDITION.matchBonus === isMatchBonus,
    );

    return prize;
  }

  getLottoResult(lottoList) {
    const lottoResult = lottoList
      .map(lotto => this.getPrize(lotto))
      .filter(prize => prize !== undefined)
      .map(prize => prize.toLowerCase());

    return lottoResult;
  }

  setMatchCount(lottoResult) {
    const matchCount = {};

    lottoResult.forEach(prize => {
      matchCount[prize] = (matchCount[prize] || 0) + 1;
    });

    this.matchCount = { ...this.matchCount, ...matchCount };
  }

  setTotalPrize() {
    const matchCount = Object.values(this.matchCount);
    const prize = Object.values(LOTTO_PRIZE).map(key => key.PRIZE);

    const totalPrize = prize.reduce(
      (total, amount, index) => total + amount * matchCount[index],
      CONSTANTS.DEFAULT_VALUE,
    );

    this.totalPrize = totalPrize;
  }

  drawLotto() {
    const lottoResult = this.getLottoResult(this.lottos);

    this.setMatchCount(lottoResult);
    this.setTotalPrize();
  }

  getProfitRate() {
    const purchaseNumber = this.lottos.length;
    const profitRate =
      (this.totalPrize / (purchaseNumber * CONSTANTS.LOTTO_PRICE)) * 100;

    return profitRate.toFixed(CONSTANTS.DEMICAL_PLACE);
  }

  printResult() {
    const matchCount = Object.values(this.matchCount);
    const profitRate = this.getProfitRate();

    printLottoResult(matchCount, profitRate);
  }

  async play() {
    await this.setLottoConfig();
    this.drawLotto();
    this.printResult();
  }
}

export default App;
