class LottoProfitCalculator {
  constructor(lottoWinnerPrize, purchasedPrice) {
    this.lottoWinnerPrize = lottoWinnerPrize;
    this.purchasedPrice = purchasedPrice;
  }

  rate() {
    const totalProfit = this.calculateTotalProfit();

    if (totalProfit === 0) {
      return 0.0;
    }

    const profitRate = (totalProfit / this.purchasedPrice) * 100;
    const roundedProfitRate = profitRate.toFixed(1);
    return roundedProfitRate;
  }

  calculateTotalProfit() {
    const winningResult = Object.values(this.lottoWinnerPrize);

    const sum = winningResult.reduce((acc, { prizeMoney, count }) => {
      const priceResult = prizeMoney * count;
      return acc + priceResult;
    }, 0);

    return sum;
  }
}

export default LottoProfitCalculator;
