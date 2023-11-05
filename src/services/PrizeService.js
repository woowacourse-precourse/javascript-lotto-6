class PrizeService {
  getPrize({ lotto, winningLotto }) {
    const { matchCount, matchBonus } = this.#matchLottoNumber({
      lotto,
      winningLotto,
    });
  }

  #matchLottoNumber({ lotto, winningLotto }) {
    const winningNumbers = winningLotto.getNumbers();
    const bonusNumber = winningLotto.getBonusNumber();

    const matchCount = this.#getMatchCount({ lotto, winningNumbers });
    const matchBonus = lotto.hasInclude(bonusNumber);

    return { matchCount, matchBonus };
  }

  #getMatchCount({ lotto, winningNumbers }) {
    return winningNumbers.reduce(
      (count, number) => (lotto.hasInclude(number) ? count + 1 : count),
      0,
    );
  }
}

export default PrizeService;
