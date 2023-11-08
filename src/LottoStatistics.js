import WinningCount from './WinningCount';
import WINNING_MONEY from './constant/winningMoney';

class LottoStatistics extends WinningCount {
  #paymentAmount;

  #totalWinningMoney;

  #earningRate;

  constructor(paymentAmount, winningNumbers, bonusNumber, lottos) {
    super(winningNumbers, bonusNumber, lottos);
    this.#paymentAmount = paymentAmount;
    this.#totalWinningMoney = 0;
    this.#earningRate = 0;
    this.#calculateTotalWinningMoney();
    this.#calculateEarningRate();
  }

  #calculateTotalWinningMoney() {
    const winningRate = this.getWinningRate();
    const totalWinningMoney = Object.entries(winningRate).reduce(
      (acc, [rank, count]) => acc + WINNING_MONEY[rank] * count,
      0
    );
    this.#totalWinningMoney = totalWinningMoney;
  }

  #calculateEarningRate() {
    const earningRate = (this.#totalWinningMoney / this.#paymentAmount) * 100;
    this.#earningRate = earningRate.toFixed(1);
  }

  getEarningRate() {
    return this.#earningRate;
  }
}

export default LottoStatistics;
