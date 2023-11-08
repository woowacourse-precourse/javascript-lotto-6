import { LOTTO_PRIZE_AMOUNT, PRICE } from "../constant/lottoConstants";

class LottoResultChecker {
  #result = {
    firstPrize: 0,
    secondPrize: 0,
    thirdPrize: 0,
    fourthPrize: 0,
    lastPrize: 0,
  };

  #profitRate;

  #boughtLottos;

  constructor(winningNumbers, bonusNumber, boughtLottos) {
    this.#boughtLottos = boughtLottos;
    this.#checkResult(winningNumbers, bonusNumber);
    this.#CalculateProfitRate();
  }

  getResult() {
    return this.#result;
  }

  getProfitRate() {
    return this.#profitRate;
  }

  #checkResult(winningNumbers, bonusNumber) {
    this.#boughtLottos.forEach((lottoNumbers) => {
      const matchCount = this.#comparsionLotto(winningNumbers, lottoNumbers);
      const bonusMatch = lottoNumbers.includes(bonusNumber);

      this.#updateResult(matchCount, bonusMatch);
    });
  }

  #comparsionLotto(winningNumbers, lottoNumbers) {
    const winningNums = new Set(winningNumbers);
    let matchCount = 0;

    // winningNumbers: string{}, number: number
    lottoNumbers.forEach((number) => {
      if (winningNums.has(String(number))) {
        matchCount += 1;
      }
    });

    return matchCount;
  }

  #updateResult(matchCount, bonusMatch) {
    switch (matchCount) {
      case 6: this.#result.firstPrize += 1;
        break;
      case 5:
        if (bonusMatch) {
          this.#result.secondPrize += 1;
          break;
        }

        this.#result.thirdPrize += 1;
        break;
      case 4: this.#result.fourthPrize += 1;
        break;
      case 3: this.#result.lastPrize += 1;
        break;
      default:
        break;
    }
  }

  #CalculateProfitRate() {
    const keys = ['FIRST_PLACE', 'SECOND_PLACE', 'THIRD_PLACE', 'FOURTY_PLACE', 'LAST_PLACE'];
    const purchaseAmount = this.#boughtLottos.length * PRICE.LOTTO;
    const lottoProfits = Object.entries(this.#result)
      .reduce((total, [, value], index) => (
        total + value * LOTTO_PRIZE_AMOUNT[keys[index]]
      ), 0);

    this.#profitRate = (lottoProfits / purchaseAmount) * 100;
  }
}

export default LottoResultChecker;
