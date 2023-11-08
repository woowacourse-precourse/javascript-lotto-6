class LottoCalculator {
  #winnings = [5000, 50000, 1500000, 30000000, 2000000000];

  addAllWinnings(ranks) {
    const totalWinnings = ranks.reduce(
      (acc, cur, i) => acc + cur * this.#winnings[i],
      0,
    );
    return totalWinnings;
  }

  getRateOfReturn(totalWinnings, purchaseAmount) {
    const rateOfReturn = (totalWinnings / purchaseAmount) * 100;
    return rateOfReturn.toFixed(1);
  }
}

export default LottoCalculator;
