class WinLotto {
  #winLotto;

  constructor([winLotto, bonusNumber]) {
    this.#winLotto = {
      winNumbers: winLotto.getLotto(),
      bonusNumber: bonusNumber,
    };
  }

  countMatchingNumbers(lotto) {
    const lottoNumbers = lotto.getLotto();
    const winCount = this.#countWinNumbers(lottoNumbers);
    const bonusCount = this.#countBonusNumber(lottoNumbers);

    return [winCount, bonusCount];
  }

  #countWinNumbers(lotto) {
    let count = 0;
    lotto.forEach((num) => {
      if (this.#winLotto.winNumbers.includes(num)) count += 1;
    });

    return count;
  }

  #countBonusNumber(lotto) {
    let count = 0;
    if (lotto.includes(this.#winLotto.bonusNumber)) count += 1;

    return count;
  }
}

export default WinLotto;
