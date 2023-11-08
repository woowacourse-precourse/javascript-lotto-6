import Prize from '../Domain/Prize.js';
import PRIZE from '../constants/prize.js';
import LOTTO from '../constants/lotto.js';
import PRIZE_SERVICE from '../constants/prizeService.js';

class PrizeService {
  static #defaultPrize = {};

  getPrize({ lotto, winningLotto }) {
    const { matchCount, matchBonus } = this.#matchLottoNumber({
      lotto,
      winningLotto,
    });

    return Prize.getPrize({ matchCount, matchBonus });
  }

  getProfitRate({ prizes, purchaseQuantity }) {
    const totalPrize = this.#getTotalPrize(prizes);
    const profitRate = this.#getProfitRate(totalPrize, purchaseQuantity);

    return profitRate.toFixed(1);
  }

  #getTotalPrize(prizes) {
    return Object.entries(prizes).reduce((acc, [status, quantity]) => {
      const winningPrize =
        PRIZE[status]?.winningPrize || PRIZE_SERVICE.prize.defaultCount;

      return acc + winningPrize * quantity;
    }, PRIZE_SERVICE.profit.default);
  }

  #getProfitRate(totalPrize, purchaseQuantity) {
    const totalCost = purchaseQuantity * LOTTO.price;
    const rawProfitRate = totalPrize / totalCost;

    return rawProfitRate * PRIZE_SERVICE.profit.unit;
  }

  countPrize(prizes) {
    return prizes.reduce((acc, prize) => {
      const { status } = prize;
      acc[status] =
        (acc[status] || PRIZE_SERVICE.prize.defaultCount) +
        PRIZE_SERVICE.prize.countUnit;

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
        lotto.hasInclude(number)
          ? count + PRIZE_SERVICE.prize.countUnit
          : count,
      PRIZE_SERVICE.prize.defaultCount,
    );
  }
}

export default PrizeService;
