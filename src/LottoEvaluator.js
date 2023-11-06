class LottoEvaluator {
  constructor(lottoList, winningNumber, bonusNumber) {
    this.lottoList = lottoList;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
  }

  evaluateLotto() {
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    this.lottoList.forEach((lotto) => {
      const compareLotto = this.getCompareLotto(lotto);
      this.updateResult(result, compareLotto);
    });

    return result;
  }

  getCompareLotto(lotto) {
    const compareCount = lotto.filter((number) =>
      this.winningNumber.includes(number)
    ).length;
    const hasBonus = lotto.includes(this.bonusNumber);
    return { compareCount, hasBonus };
  }

  updateResult(result, compareLotto) {
    switch (compareLotto.compareCount) {
      case 6:
        result.first += 1;
        break;
      case 5:
        this.bonusOrNotBonus(result, compareLotto.hasBonus);
        break;
      case 4:
        result.fourth += 1;
        break;
      case 3:
        result.fifth += 1;
        break;
    }
  }

  bonusOrNotBonus(result, hasBonus) {
    if (hasBonus) {
      result.second += 1;
    } else {
      result.third += 1;
    }
  }
}

export { LottoEvaluator };
