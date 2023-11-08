import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import CONSTANTS from './constants/Constants.js';
import LOTTO_PRIZE from './constants/LottoPrize.js';
import { matchArrays, sortArray } from './utils/arrayUtils.js';
import view from './utils/view.js';

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = null;
    this.bonusNumber = null;

    this.totalPrize = {
      first: CONSTANTS.DEFAULT_PRIZE,
      second: CONSTANTS.DEFAULT_PRIZE,
      third: CONSTANTS.DEFAULT_PRIZE,
      fourth: CONSTANTS.DEFAULT_PRIZE,
      fifth: CONSTANTS.DEFAULT_PRIZE,
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

  matchLottoNumbers(lotto) {
    const matchCount = matchArrays(lotto, this.winningNumbers).length;
    const matchBonus = lotto.includes(this.bonusNumber);

    return [matchCount, matchBonus];
  }

  setPrize(lotto) {
    const [matchCount, matchBonus] = this.matchLottoNumbers(lotto);

    const lottoResult = Object.keys(LOTTO_PRIZE).find(
      prizeTitle =>
        LOTTO_PRIZE[prizeTitle].CONDITION.matchCount === matchCount &&
        LOTTO_PRIZE[prizeTitle].CONDITION.matchBonus === matchBonus,
    );

    return lottoResult;
  }

  drawLotto() {
    const lottoResults = this.lottos
      .map(lotto => this.setPrize(lotto.getNumberList()))
      .filter(prize => prize !== undefined)
      .map(prize => prize.toLowerCase());

    const prizeCount = {};

    lottoResults.forEach(prize => {
      prizeCount[prize] = (prizeCount[prize] || 0) + 1;
    });

    this.totalPrize = { ...this.totalPrize, ...prizeCount };
  }

  async play() {
    await this.setLottoConfig();
    this.drawLotto();
  }
}

export default App;
