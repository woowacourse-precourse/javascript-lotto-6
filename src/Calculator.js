import { WINNINGS_MONEY } from './constant';

class Calculator {
  calculateWinnings(winningResult) {
    return winningResult.map((v) => WINNINGS_MONEY[v.rank] * v.number);
  }

  getTotalWinnings(winningResult) {
    return this.calculateWinnings(winningResult).reduce((a, c) => a + c, 0);
  }

  round(number) {
    return Math.round(number * 100) / 100;
  }

  calculateRateOfReturn(paymentAmount, winnings) {
    const value = (winnings / paymentAmount) * 100;
    return this.round(value);
  }

  getRateOfReturn(winningResult, paymentAmount) {
    const winnings = this.calculateWinnings(winningResult);

    const rateOfReturn = this.calculateRateOfReturn(paymentAmount, winnings);
    return rateOfReturn;
  }
}

export default Calculator;
