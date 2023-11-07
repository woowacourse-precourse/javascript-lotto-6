class WinningLotto {
  #winningLotto;

  constructor(winningNumber, bonusNumber) {
    this.#winningLotto = {
      winningNumber: winningNumber,
      bonusNumber: bonusNumber,
    };
  }

  countMatchingNumbers(lotto) {
    const lottoNumbers = lotto.getLotto();
    const winnigCount = this.countWinning(lottoNumbers);
    let bonusCount = 0;
    if (winnigCount === 5) {
      bonusCount = this.countBonus(lottoNumbers);
    }

    return [winnigCount, bonusCount];
  }

  countWinning(lotto) {
    let count = 0;
    lotto.forEach((number) => {
      if (this.#winningLotto.winningNumber.includes(number)) count += 1;
    });

    return count;
  }

  countBonus(lotto) {
    let count = 0;
    if (lotto.includes(this.#winningLotto.bonusNumber)) count += 1;

    return count;
  }
}

export default WinningLotto;
