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

  static calulateLottoPayoutRate(outcome, buyingPrice) {
    const totalPayout = LottoWinnerVerifier.#getTotalPayout(outcome);
    const rate = (totalPayout / buyingPrice) * 100;
    return Math.round((rate + Number.EPSILON) * 100) / 100;
  }

  static #getTotalPayout(outcome) {
    const prize = {
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    };
    let result = 0;

    for (const win in prize) {
      result = prize[win] * outcome[win];
    }
    return result;
  }
}

export default LottoWinnerVerifier;
