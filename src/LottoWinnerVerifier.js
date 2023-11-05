class LottoWinnerVerifier {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  checkLottoOutcome(lottos) {
    const result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      ['no prize']: 0,
    };
    lottos.forEach(lotto => (result[this.#getPrize(lotto)] += 1));
    return result;
  }

  #getPrize(lotto) {
    const prize = {
      6: 'first',
      5: this.#hasBonusNumber(lotto) ? 'second' : 'third',
      4: 'fourth',
      3: 'fifth',
    };
    const count = this.#getSameNumberCount(lotto);
    return prize[count] ?? 'no prize';
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
