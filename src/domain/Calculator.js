import LottoReward from './LottoReward.js';

class Calculator {
  /**
   * @returns {Calculator}
   */
  static of() {
    return new Calculator();
  }

  /**
   * LottoRewards의 수익률을 계산합니다.
   * @param {number} income
   * @param {LottoReward[]} rewards
   * @returns {number}
   */
  earningRate(income, rewards) {
    const totalPrize = rewards.reduce((total, reward) => total + reward.getTotalPrize(), 0);
    return Math.round((totalPrize / income) * 1000) / 10;
  }
}

export default Calculator;
