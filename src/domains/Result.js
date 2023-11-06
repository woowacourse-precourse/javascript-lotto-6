class Result {
  constructor(lottos, winningRate) {
    this.lottos = lottos;
    this.winningRate = winningRate;
  }

  calcResults() {
    const results = this.lottos.reduce(
      (results, lotto) => {
        return this.updateResults(results, lotto);
      },
      { 3: 0, 4: 0, 5: 0, "5bonus": 0, 6: 0 },
    );

    const investment = this.lottos.length * 1000;
    const totalPrize = this.calcTotalPrize(results);
    const roi = this.calcRoi(totalPrize, investment);

    return { results, roi };
  }

  updateResults(results, lotto) {
    const count = this.winningRate.countMatchLottoNumber(lotto);
    const isMatchBonus = this.winningRate.isMatchBonusNumber(lotto);

    if (count >= 3) {
      results[count === 5 && isMatchBonus ? "5bonus" : count]++;
    }

    return results;
  }

  calcTotalPrize(results) {
    return (
      results[3] * 5000 +
      results[4] * 50000 +
      results[5] * 1500000 +
      results["5bonus"] * 30000000 +
      results[6] * 2000000000
    );
  }

  calcRoi(totalPrize, investment) {
    const profit = totalPrize - investment;
    return Number(((profit / investment + 1) * 100).toFixed(2));
  }
}

export default Result;
