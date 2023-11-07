import GameUtils from '../utils/GameUtils.js';

class LottoWinStatistics {
  #prizeByTickets;

  #returnRate;

  constructor() {
    this.#prizeByTickets = [];
  }

  pushPrize(prize) {
    this.#prizeByTickets.push(prize);
  }

  calculateReturnRate(purchaseAmount) {
    const prizeSum = this.#prizeByTickets.reduce((acc, cur) => acc + cur, 0);

    this.#returnRate = GameUtils.getReturnRateRoundSecondDecimalPlace(
      prizeSum,
      purchaseAmount,
    );
  }

  getSpecificPrizeCount(prize) {
    const specificPrizes = this.#prizeByTickets.filter(
      (curPrize) => curPrize === prize,
    );

    return specificPrizes.length;
  }

  getReturnRate() {
    return this.#returnRate;
  }
}

export default LottoWinStatistics;
