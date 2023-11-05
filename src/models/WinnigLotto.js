class WinningLotto {
  #winningLotto;

  constructor({ winningNumbers, bonusNumber }) {
    this.#winningLotto = { numbers: winningNumbers, bonus: bonusNumber };
  }

  countMatchingNumbers(lotto) {
    const lottoNumbers = lotto.getLotto();
    const winnigCount = this.countWinning(lottoNumbers);
    const bonusCount = this.countBonus(lottoNumbers);

    return [winnigCount, bonusCount];
  }

  countWinning(lotto) {
    let count = 0;
    lotto.forEach((number) => {
      if (this.#winningLotto.numbers.includes(number)) count += 1;
    });

    return count;
  }

  countBonus(lotto) {
    let count = 0;
    if (lotto.includes(this.#winningLotto.bonus)) count += 1;

    return count;
  }
}

export default WinningLotto;
