class LottoResultCalculator {
  #winningNumbers;
  #bonusNumber;

  constructor({ winningNumbers, bonusNumber }) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  checkLottoResult(lottoTickets) {
    const result = this.#matchLottoBalls(lottoTickets);

    return {
      first: result.filter(({ sameCount }) => sameCount === 6).length,
      second: result.filter(
        ({ sameCount, hasBonus }) => sameCount === 5 && hasBonus
      ).length,
      third: result.filter(
        ({ sameCount, hasBonus }) => sameCount === 5 && !hasBonus
      ).length,
      fourth: result.filter(({ sameCount }) => sameCount === 4).length,
      fifth: result.filter(({ sameCount }) => sameCount === 3).length,
    };
  }

  #matchLottoBalls(lottoTickets) {
    return lottoTickets.map(lottoTicket => ({
      lottoTicket,
      sameCount: this.#countSameNumber(lottoTicket),
      hasBonus: this.#hasBonusNumber(lottoTicket),
    }));
  }

  #countSameNumber(lottoTicket) {
    return lottoTicket
      .getNumbers()
      .reduce(
        (result, number) =>
          this.#winningNumbers.includes(number) ? result + 1 : result,
        0
      );
  }

  #hasBonusNumber(lottoTicket) {
    return lottoTicket.getNumbers().includes(this.#bonusNumber);
  }
}

export default LottoResultCalculator;
