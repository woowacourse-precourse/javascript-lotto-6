import Prize from '../Domain/Prize.js';

class PrizeService {
  static #defaultMatchCount = 0;

  static #countUnit = 1;

  getPrize({ lotto, winningLotto }) {
    const { matchCount, matchBonus } = this.#matchLottoNumber({
      lotto,
      winningLotto,
    });

    return Prize.getPrize({ matchCount, matchBonus });
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
      (count, number) =>
        lotto.hasInclude(number) ? count + PrizeService.#countUnit : count,
      PrizeService.#defaultMatchCount,
    );
  }
}

export default PrizeService;
