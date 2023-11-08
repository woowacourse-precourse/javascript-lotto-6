import { LOTTO_PRIZE_AMOUNT, MATCH_COUNT, PRICE } from "../constant/lottoConstants";

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
    this.#calculateProfitRate();
  }

  getResult() {
    return this.#result;
  }

  getProfitRate() {
    return this.#profitRate;
  }

  #checkResult(winningNumbers, bonusNumber) {
    this.#boughtLottos.forEach((lottoNumbers) => {
      const matchCount = this.#compareLotto(winningNumbers, lottoNumbers);
      const bonusMatch = lottoNumbers.includes(bonusNumber);

      this.#updateResult(matchCount, bonusMatch);
    });
  }

  #compareLotto(winningNumbers, lottoNumbers) {
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
      case MATCH_COUNT.SIX: this.#result.firstPrize += 1;
        break;
      case MATCH_COUNT.FIVE:
        if (bonusMatch) {
          this.#result.secondPrize += 1;
          break;
        }

        this.#result.thirdPrize += 1;
        break;
      case MATCH_COUNT.FOUR: this.#result.fourthPrize += 1;
        break;
      case MATCH_COUNT.THREE: this.#result.lastPrize += 1;
        break;
    }
  }

  #calculateProfitRate() {
    const keys = Object.keys(LOTTO_PRIZE_AMOUNT);
    const purchaseAmount = this.#boughtLottos.length * PRICE.LOTTO;
    const lottoProfits = Object.entries(this.#result)
      .reduce((total, [, value], index) => (
        total + value * LOTTO_PRIZE_AMOUNT[keys[index]]
      ), 0);

    this.#profitRate = (lottoProfits / purchaseAmount) * 100;
  }
}

export default LottoResultChecker;
