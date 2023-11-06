import GameUtils from '../utils/GameUtils.js';

class LottoWinStatistics {
  #prizeByTickets;

  #prizeRate;

  constructor() {
    this.#prizeByTickets = [];
  }

  pushPrize(prize) {
    this.#prizeByTickets.push(prize);
  }

  calculateRate(purchaseAmount) {
    const prizeSum = this.#prizeByTickets.reduce((acc, cur) => acc + cur, 0);

    this.#prizeRate = GameUtils.getRateRoundSecondDecimalPlace(
      prizeSum,
      purchaseAmount,
    );
  }

  getSpecificRankCount(prize) {
    const specificRanks = this.#prizeByTickets.filter(
      (curPrize) => curPrize === prize,
    );

    return specificRanks.length;
  }

  getPrizeRate() {
    return this.#prizeRate;
  }
}

export default LottoWinStatistics;
