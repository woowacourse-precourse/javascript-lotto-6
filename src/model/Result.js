class Result {
  #prizeCount;

  #results;

  constructor(userLottos, winLotto, bonusLotto) {
    this.userLottos = userLottos;
    this.winLotto = winLotto;
    this.bonusLotto = bonusLotto;
    this.#prizeCount = {
      firstPrize: 0,
      secondPrize: 0,
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 0,
    };
    this.#setResults();
  }

  getResults() {
    return this.#results;
  }

  #setResults() {
    this.userLottos.forEach((userLotto) => {
      const { matchedCount, hasBonusNumber } = this.#calculateMatchResult(userLotto);
      this.#calculatePrize(matchedCount, hasBonusNumber);
    });
    this.#results = this.#calculateResult();
  }

  #calculateResult = () => {
    const { firstPrize, secondPrize, thirdPrize, fourthPrize, fifthPrize } = this.#prizeCount;

    const resultLines = [
      `3개 일치 (5,000원) - ${fifthPrize}개`,
      `4개 일치 (50,000원) - ${fourthPrize}개`,
      `5개 일치 (1,500,000원) - ${thirdPrize}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondPrize}개`,
      `6개 일치 (2,000,000,000원) - ${firstPrize}개`,
    ];

    return resultLines;
  };

  #calculateMatchResult(userLotto) {
    const matchedNumbers = userLotto.filter((number) => this.winLotto.includes(number));
    const matchedCount = matchedNumbers.length;
    const hasBonusNumber = userLotto.includes(this.bonusLotto);

    return { matchedCount, hasBonusNumber };
  }

  #calculatePrize(matchedCount, hasBonusNumber) {
    if (matchedCount === 6) {
      this.#prizeCount.firstPrize += 1;
    } else if (matchedCount === 5 && hasBonusNumber) {
      this.#prizeCount.secondPrize += 1;
    } else if (matchedCount === 5 && !hasBonusNumber) {
      this.#prizeCount.thirdPrize += 1;
    } else if (matchedCount === 4) {
      this.#prizeCount.fourthPrize += 1;
    } else if (matchedCount === 3) {
      this.#prizeCount.fifthPrize += 1;
    }
  }
}

export default Result;
