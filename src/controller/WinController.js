import { WINNING_AMOUNT, WINNING_MESSAGES } from '../constant.js';
import OutputView from '../view/OutputView.js';

export default class WinController {
  outputView = new OutputView();
  #purchaseAmount;
  #winningNumbers;
  #bonusNumber;
  #purchasedLottos;
  #winningCount = [0, 0, 0, 0, 0, 0, 0];
  #win5andBonus = 0;
  #profitRate;

  constructor(purchaseAmount, winningNumbers, bonusNumber, purchasedLottos) {
    this.#purchaseAmount = purchaseAmount;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchasedLottos = purchasedLottos;

    this.checkWinResults();
  }

  checkWinResults() {
    this.printWinningStats();

    this.calculateMatchLottos();
    this.calculateWinningDetails();
    this.printWinningDetails();

    this.calculateProfitRate();
    this.printProfitRate();
  }

  printWinningStats() {
    this.outputView.printMessage(`\n${WINNING_MESSAGES.WINNING_STATS}`);
  }

  calculateMatchLottos() {
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
      if (pLottoNumbers.includes(parseInt(this.#winningNumbers[i], 10))) {
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

  calculateWinningDetails() {
    this.#purchasedLottos.forEach((pLotto) => {
      if (
        pLotto.getMatchedBonusCount() == 1 &&
        pLotto.getMatchedNumberCount() == 5
      ) {
        this.#win5andBonus++;
        return;
      }
      this.#winningCount[pLotto.getMatchedNumberCount()]++;
    });
  }

  printWinningDetails() {
    this.outputView.printWinning(this.#winningCount, this.#win5andBonus);
  }

  calculateProfitRate() {
    this.calculateWinningAmount() / this.#purchaseAmount;
    this.#profitRate =
      Math.round(
        (this.calculateWinningAmount() / this.#purchaseAmount) * 10000
      ) / 100;
  }

  calculateWinningAmount() {
    return (
      this.#winningCount[3] * WINNING_AMOUNT.MATCHING_3 +
      this.#winningCount[4] * WINNING_AMOUNT.MATCHING_4 +
      this.#winningCount[5] * WINNING_AMOUNT.MATCHING_5 +
      this.#win5andBonus * WINNING_AMOUNT.MATCHING_5_BONUS +
      this.#winningCount[6] * WINNING_AMOUNT.MATCHING_6
    );
  }

  printProfitRate() {
    this.outputView.printProfitRate(this.#profitRate);
  }
}
