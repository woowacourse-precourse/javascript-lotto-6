import OutputView from '../view/OutputView.js';

export default class WinController {
  #amount;
  #lottoNumbers;
  #bonusNumber;
  #purchasedLottos;
  #WinningCount = [0, 0, 0, 0, 0, 0, 0];
  #Win5andBonus = 0;
  outputView = new OutputView();

  constructor(amount, lottoNumbers, bonusNumber, purchasedLottos) {
    this.#amount = amount;
    this.#lottoNumbers = lottoNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchasedLottos = purchasedLottos;
    this.checkWinResults();
  }

  checkWinResults() {
    this.calculateWinningDetails();
    this.printWinningDetails();
    // 수익률
    // 출력
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

  calculateProfitRate() {}

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
}
