import WinningStatistics from './WinningStatistics.js';

class WinningStatisticsUI {
  constructor(amount, purchase, winningNumbers, bonusWinningNumber) {
    this.amount = amount;
    this.purchase = purchase;
    this.winningNumbers = winningNumbers;
    this.bonusWinningNumber = bonusWinningNumber;
  }

  async output() {
    const WINNING_STATISTICS = new WinningStatistics(
      this.amount,
      this.purchase,
      this.winningNumbers,
      this.bonusWinningNumber
    );

    WINNING_STATISTICS.totalCount();
    WINNING_STATISTICS.calculate();
    WINNING_STATISTICS.ui();
  }
}

export default WinningStatisticsUI;
