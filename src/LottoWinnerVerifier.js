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
    return lotto.reduce(
      (mount, number) =>
        this.#winningNumbers.includes(number) ? mount + 1 : mount,
      0
    );
  }

  #hasBonusNumber(lotto) {
    return lotto.includes(this.#bonusNumber);
  }
}

export default LottoWinnerVerifier;
