class LottoResultChecker {
  #result = {
    firstPrize: 0,
    secondPrize: 0,
    thirdPrize: 0,
    fourthPrize: 0,
    lastPrize: 0,
  };

  constructor(winningNumbers, bonusNumber, boughtLottos) {
    this.#checkResult(winningNumbers, bonusNumber, boughtLottos);
  }

  getResult() {
    const {
      firstPrize, secondPrize, thirdPrize, fourthPrize, lastPrize,
    } = this.#result;

    return {
      firstPrize, secondPrize, thirdPrize, fourthPrize, lastPrize,
    };
  }

  #checkResult(winningNumbers, bonusNumber, boughtLottos) {
    boughtLottos.forEach((lottoNumbers) => {
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
}

export default LottoResultChecker;
