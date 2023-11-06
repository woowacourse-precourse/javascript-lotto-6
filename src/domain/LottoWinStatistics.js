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

  getPrizeRate() {
    return this.#prizeRate;
  }
}

export default LottoWinStatistics;
