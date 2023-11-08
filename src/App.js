import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import CONSTANTS from './constants/Constants.js';
import LOTTO_PRIZE from './constants/LottoPrize.js';
import { sortArray } from './utils/arrayUtils.js';
import view from './utils/view.js';

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = null;
    this.bonusNumber = null;

    this.matchCount = {
      first: CONSTANTS.DEFAULT_VALUE,
      second: CONSTANTS.DEFAULT_VALUE,
      third: CONSTANTS.DEFAULT_VALUE,
      fourth: CONSTANTS.DEFAULT_VALUE,
      fifth: CONSTANTS.DEFAULT_VALUE,
    };
  }

  async setPurchaseLottos() {
    const purchaseLottoCount = await view.readPurchaseLottos();

    let i;

    for (i = 0; purchaseLottoCount > i; i += 1) {
      const numbers = sortArray(Random.pickUniqueNumbersInRange(1, 45, 6));

      this.lottos.push(new Lotto(numbers));
    }
  }

  async setWinningLotto() {
    this.winningNumbers = await view.readWinningNumbers();
    this.bonusNumber = await view.readBonusNumber(this.winningNumbers);
  }

  async setLottoConfig() {
    await this.setPurchaseLottos();
    view.printPurchaseLottoInfo(this.lottos);

    await this.setWinningLotto();
  }

  getPrize(lotto) {
    const [matchCount, isMatchBonus] = lotto.matchLotto(
      this.winningNumbers,
      this.bonusNumber,
    );

    const prize = Object.keys(LOTTO_PRIZE).find(
      prizeTitle =>
        LOTTO_PRIZE[prizeTitle].CONDITION.matchCount === matchCount &&
        LOTTO_PRIZE[prizeTitle].CONDITION.matchBonus === isMatchBonus,
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

  setTotalPrize(lottoResult) {
    const prizeCount = {};

    lottoResult.forEach(prize => {
      prizeCount[prize] = (prizeCount[prize] || 0) + 1;
    });

    this.matchCount = { ...this.matchCount, ...prizeCount };
  }

  drawLotto(lottoList) {
    const lottoResult = this.getLottoResult(lottoList);

    this.setTotalPrize(lottoResult);
  }

  printResult() {
    const matchCount = Object.values(this.matchCount);

    view.printLottoResult(matchCount);
  }

  async play() {
    await this.setLottoConfig();
    this.drawLotto(this.lottos);
    this.printResult();
  }
}

export default App;
