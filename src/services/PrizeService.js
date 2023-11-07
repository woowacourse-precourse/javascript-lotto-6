import Prize from '../Domain/Prize.js';
import PRIZE from '../constants/prize.js';
import LOTTO from '../constants/lotto.js';

class PrizeService {
  static #defaultNumber = 0;

  static #defaultProfit = 0;

  static #countUnit = 1;

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
      const winningPrize = PRIZE[status]?.winningPrize || 0;

      return acc + winningPrize * quantity;
    }, PrizeService.#defaultProfit);
  }

  #getProfitRate(totalPrize, purchaseQuantity) {
    return (totalPrize / (purchaseQuantity * LOTTO.price)) * 100;
  }

  countPrize(prizes) {
    return prizes.reduce((acc, prize) => {
      const { status } = prize;
      acc[status] =
        (acc[status] || PrizeService.#defaultNumber) + PrizeService.#countUnit;

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
      PrizeService.#defaultNumber,
    );
  }
}

export default PrizeService;
