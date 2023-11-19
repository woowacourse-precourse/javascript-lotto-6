import { WINNINGS_MONEY } from '../constants/Rule.js';
class Calculator {
  calculateWinnings(winningResult) {
    return winningResult.map((v) => WINNINGS_MONEY[v.rank] * v.number);
  }

  getTotalWinnings(winningResult) {
    return this.calculateWinnings(winningResult).reduce((a, c) => a + c, 0);
  }

  round(number) {
    return Number(number.toFixed(1));
  }

  calculateRateOfReturn(paymentAmount, winnings) {
    const value = (winnings / paymentAmount) * 100;
    return this.round(value);
  }

  getRateOfReturn(winningResult, paymentAmount) {
    const winnings = this.getTotalWinnings(winningResult);

    const rateOfReturn = this.calculateRateOfReturn(paymentAmount, winnings);

    return rateOfReturn;
  }
}

export default Calculator;
