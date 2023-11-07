export default class WinController {
  #amount;
  #lottoNumbers;
  #bonusNumber;
  #purchasedLottos;

  constructor(amount, lottoNumbers, bonusNumber, purchasedLottos) {
    this.#amount = amount;
    this.#lottoNumbers = lottoNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchasedLottos = purchasedLottos;
    this.checkWinResults();
  }

  checkWinResults() {
    // 당첨 내역
    this.calculateWinningDetails();
    // 수익률
    // 출력
  }

  calculateWinningDetails() {
    this.#purchasedLottos.forEach((pLotto) => {
      pLotto.setNumberOfMatch(
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

  printWinResults() {}
}
