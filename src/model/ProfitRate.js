import OutputView from '../view/OutputView';

class ProfitRate {
  static calculateProfitRate(purchaseAmount, totalPrize) {
    const profitRate = (totalPrize / purchaseAmount) * 100;

    if (profitRate % 0.01) {
      profitRate.toFixed(2);
    }

    OutputView.printProfitRate(profitRate);
  }
}

export default ProfitRate;
