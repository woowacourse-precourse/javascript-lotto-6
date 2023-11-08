import { RANK_1, RANK_2, RANK_3, RANK_4, RANK_5, RANK_NONE, PRIZE_LIST } from "./constants.js";

class WinningController {
  static countWinning({ lotto, winningNumbers }) {
    const winning = winningNumbers.reduce((acc, winningNumber) => {
      if (lotto.getNumbers().includes(winningNumber)) {
        return acc + 1;
      }

      return acc;
    }, 0);

    return winning;
  }

  static checkBonus({ lotto, bonusNumber }) {
    return lotto.getNumbers().includes(bonusNumber);
  }

  static toRank({ winning, bonus }) {
    if (winning === 6) return RANK_1;
    if (winning === 5 && bonus) return RANK_2;
    if (winning === 5) return RANK_3;
    if (winning === 4) return RANK_4;
    if (winning === 3) return RANK_5;

    return RANK_NONE;
  }

  static countRanks({ lottos, winningNumbers, bonusNumber }) {
    const initialRanks = [0, 0, 0, 0, 0, 0]

    const ranks = lottos.reduce((ranks, lotto) => {
      const winning = WinningController.countWinning({ lotto, winningNumbers });
      const bonus = WinningController.checkBonus({ lotto, bonusNumber });
      const rank = WinningController.toRank({ winning, bonus });

      const prevRankCount = ranks[rank];
      const newRanks = [...ranks.slice(0, rank), prevRankCount + 1, ...ranks.slice(rank + 1)];

      return newRanks;
    }, initialRanks);

    return ranks;
  }

  static calculatePrize(ranks) {
    const prize = ranks.reduce((acc, rank, index) => {
      return acc + (rank * PRIZE_LIST[index]); 
    }, 0);

    return prize;
  }
}

export default WinningController;
