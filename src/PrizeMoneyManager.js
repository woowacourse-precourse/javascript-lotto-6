class PrizeMoneyManager {
  #prizeMoneys
  
  constructor() {
    this.#prizeMoneys = [5000, 50000, 1500000, 3000000, 2000000];
  }

  calculateTotalPrizeMoney(ranks) {
    let money = 0;

    ranks.map((rank, winning) => {
      money += this.#prizeMoneys[winning] * rank;
    });

    return money;
  }

  calculateEarningsPercent(money, amount) {
    return ((money / amount) * 100).toFixed(1);
  }
}

export default PrizeMoneyManager;
