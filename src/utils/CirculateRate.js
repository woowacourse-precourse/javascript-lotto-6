import { WINNING_AMOUNTS } from '../constants/winning.js';

class CirculateRate {
  static winningReword(winnings) {
    return winnings.reduce((acc, amount, index) => acc + amount * WINNING_AMOUNTS[index], 0);
  }

  static calculateRevenueRate(reword, purchaseAmount) {
    const rate = (reword / purchaseAmount) * 100;
    return Math.round(rate * 100) / 100;
  }

  static revenueRate(winnings, purchaseAmount) {
    const reword = this.winningReword(winnings);
    const rate = this.calculateRevenueRate(reword, purchaseAmount);
    return rate;
  }
}

export default CirculateRate;
