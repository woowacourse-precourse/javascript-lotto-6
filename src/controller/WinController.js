import { WINNING_MESSAGES } from '../constant.js';
import OutputView from '../view/OutputView.js';

export default class WinController {
  #amount;
  #lottoNumbers;
  #bonusNumber;
  #purchasedLottos;
  #WinningCount = [0, 0, 0, 0, 0, 0, 0];
  #Win5andBonus = 0;
  #profitRate;
  outputView = new OutputView();

  constructor(amount, lottoNumbers, bonusNumber, purchasedLottos) {
    this.#amount = amount;
    this.#lottoNumbers = lottoNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchasedLottos = purchasedLottos;
    this.checkWinResults();
  }

  checkWinResults() {
    this.printWinningStats();

    this.calculateWinningDetails();
    this.printWinningDetails();

    this.calculateProfitRate();
    this.printProfitRate();
  }

  printWinningStats() {
    this.outputView.printMessage(`\n${WINNING_MESSAGES.WINNING_STATS}`);
  }

  calculateWinningDetails() {
    this.#purchasedLottos.forEach((pLotto) => {
      pLotto.setMatchCount(
        this.countMatchingNumbers(pLotto.getNumbers()),
        this.countMatchingBonusNumber(pLotto.getNumbers())
      );
    });
  }

  countMatchingNumbers(pLottoNumbers) {
    let count = 0;
    for (let i = 0; i < pLottoNumbers.length; i++) {
      if (this.#lottoNumbers.includes(pLottoNumbers[i].toString())) {
        count++;
      }
    }
    return count;
  }

  countMatchingBonusNumber(pLottoNumbers) {
    if (pLottoNumbers.includes(parseInt(this.#bonusNumber, 10))) {
      return 1;
    }
    return 0;
  }

  printWinningDetails() {
    this.#purchasedLottos.forEach((pLotto) => {
      if (
        pLotto.getMatchedBonusCount() == 1 &&
        pLotto.getMatchedNumberCount() == 5
      ) {
        this.#Win5andBonus++;
      } else {
        this.#WinningCount[pLotto.getMatchedNumberCount()]++;
      }
    });
    this.outputView.printWinning(this.#WinningCount, this.#Win5andBonus);
  }

  calculateProfitRate() {
    this.calculateWinningAmount() / this.#amount;
    this.#profitRate =
      Math.round((this.calculateWinningAmount() / this.#amount) * 1000) / 100;
  }

  calculateWinningAmount() {
    return (
      this.#WinningCount[3] * 5000 +
      this.#WinningCount[4] * 50000 +
      this.#WinningCount[5] * 1500000 +
      this.#Win5andBonus * 30000000 +
      this.#WinningCount[6] * 2000000000
    );
  }

  printProfitRate() {
    this.outputView.printProfitRate(this.#profitRate);
  }
}
