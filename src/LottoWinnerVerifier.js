class LottoWinnerVerifier {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  checkLottoOutcome(lottos) {
    const result = lottos.map(lotto => ({
      lotto,
      matchCount: this.#getSameNumberCount(lotto),
      hasBonus: this.#hasBonusNumber(lotto),
    }));

    return {
      first: result.filter(lotto => lotto.matchCount === 6).length,
      second: result.filter(lotto => lotto.matchCount === 5 && lotto.hasBonus)
        .length,
      third: result.filter(lotto => lotto.matchCount === 5 && !lotto.hasBonus)
        .length,
      fourth: result.filter(lotto => lotto.matchCount === 4).length,
      fifth: result.filter(lotto => lotto.matchCount === 3).length,
    };
  }

  #getSameNumberCount(lotto) {
    return lotto
      .getNumbers()
      .reduce(
        (mount, number) =>
          this.#winningNumbers.includes(number) ? mount + 1 : mount,
        0
      );
  }

  #hasBonusNumber(lotto) {
    return lotto.getNumbers().includes(this.#bonusNumber);
  }
}

export default LottoWinnerVerifier;
