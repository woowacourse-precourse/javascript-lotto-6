import Prize from '../Domain/Prize.js';

class PrizeService {
  static #defaultCount = 0;

  static #countUnit = 1;

  static #defaultPrize = {};

  getPrize({ lotto, winningLotto }) {
    const { matchCount, matchBonus } = this.#matchLottoNumber({
      lotto,
      winningLotto,
    });

    return Prize.getPrize({ matchCount, matchBonus });
  }

  countPrize(prizes) {
    return prizes.reduce((acc, prize) => {
      const { status } = prize;
      acc[status] =
        (acc[status] || PrizeService.#defaultCount) + PrizeService.#countUnit;

      return acc;
    }, PrizeService.#defaultPrize);
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
      PrizeService.#defaultCount,
    );
  }
}

export default PrizeService;
