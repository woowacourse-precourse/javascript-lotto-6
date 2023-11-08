import { WINNING_AMOUNTS } from '../constants/winning';
import { MAGIC_NUMBER } from '../constants/number';

class CirculateRate {
  static winningReword(winnings) {
    const reword = winnings.reduce(
      (acc, amount, index) => acc + amount * WINNING_AMOUNTS[index],
      MAGIC_NUMBER.zero
    );

    return reword;
  }

  static calculateRevenueRate(reword, purchaseAmount) {
    const rate = (reword / purchaseAmount) * MAGIC_NUMBER.hundred;
    return Math.round(rate * MAGIC_NUMBER.hundred) / MAGIC_NUMBER.hundred;
  }

  static revenueRate(winnings, purchaseAmount) {
    const reword = this.winningReword(winnings);
    const rate = this.calculateRevenueRate(reword, purchaseAmount);
    return rate;
  }
}

export default CirculateRate;
