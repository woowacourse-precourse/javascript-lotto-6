import { NUMBER, PRIZEMONEY_NUMBER } from './Constants/LottoGame.js';

class PrizeMoneyManager {
  #prizeMoneys;
  
  constructor() {
    this.#prizeMoneys = PRIZEMONEY_NUMBER.prizeMoneys;
  }

  calculateTotalPrizeMoney(ranks) {
    let money = NUMBER.zero;

    ranks.map((rank, winning) => {
      money += this.#prizeMoneys[winning] * rank;
    });

    return money;
  }

  calculateEarningsPercent(money, amount) {
    return ((money / amount) * PRIZEMONEY_NUMBER.percent).toFixed(PRIZEMONEY_NUMBER.roundPosition);
  }
}

export default PrizeMoneyManager;
