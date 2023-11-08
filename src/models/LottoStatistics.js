import { MATCHING_COUNT, WINNING_AMOUNT } from '../constants/WinningAmount';
import OutputView from '../views/OutputView';
import NUMBER from '../constants/Number';

class LottoStatistics {
  #matchingResult;

  #lottoStatistics = {
    FIFTH: 0,
    FOURTH: 0,
    THIRD: 0,
    SECOND: 0,
    FIRST: 0,
  };

  #winningAmount = 0;

  constructor(matchingResult) {
    this.#matchingResult = matchingResult;
    this.#getLottoResult();
    this.#getWinningAmount();
  }

  #getLottoResult() {
    this.#matchingResult.forEach(result => {
      this.#countRank(result);
    });
  }

  #countRank(result) {
    if (result.count === MATCHING_COUNT.FIRST) this.#lottoStatistics.FIRST += 1;
    else if (result.count === MATCHING_COUNT.SECOND && result.bonus)
      this.#lottoStatistics.SECOND += 1;
    else if (result.count === MATCHING_COUNT.THIRD) this.#lottoStatistics.THIRD += 1;
    else if (result.count === MATCHING_COUNT.FOURTH) this.#lottoStatistics.FOURTH += 1;
    else if (result.count === MATCHING_COUNT.FIFTH) this.#lottoStatistics.FIFTH += 1;
  }

  #getWinningAmount() {
    Object.keys(this.#lottoStatistics).forEach(key => {
      this.#winningAmount += WINNING_AMOUNT[key] * this.#lottoStatistics[key];
    });
  }

  printLottoStatistics() {
    OutputView.printResultStatistics(this.#lottoStatistics);
  }

  printRateOfReturn() {
    const purchaseAmount = this.#matchingResult.length * NUMBER.PURCHASE_AMOUNT_UNIT;
    const rate = ((this.#winningAmount / purchaseAmount) * 100).toFixed(1);
    OutputView.printTotalRate(rate);
  }
}

export default LottoStatistics;
