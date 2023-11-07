import { REWARD } from '../utils/Constant.js';
import { Validator } from '../utils/Validator.js';

export const LottoService = {
  purchase(price) {
    Validator.checkMoney(price)
    return price / 1000;
  },

  calculateRanking(lottos, winningNumber, bonusNumber) {
    const rankingCount = Array(6).fill(0);
    return lottos.reduce((acc, lotto) => {
      const ranking = lotto.winningLotto(winningNumber, bonusNumber);
      acc[ranking - 1] += 1;
      return acc;
    }, rankingCount);
  },

  calculateProfit(price, rankingResult) {
    const totalPrice = rankingResult.reduce((acc, ranking, index) => {
      acc += ranking * REWARD[index+1];
      return acc;
    }, 0);
    return (totalPrice / price) * 100;
  }
}