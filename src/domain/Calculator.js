import LottoReward from './LottoReward.js';

import { invalidInstanceElement } from '../utils/validator.js';

import ApplicationError from '../exceptions/ApplicationError.js';

class Calculator {
  static ERROR_MESSAGES = Object.freeze({
    invalidIncome: 'earningRate의 income에 숫자를 입력해주세요!',
    invalidRewards: 'earningRate의 rewards에 LottoReward가 아닌 값이 존재합니다!',
  });

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
    this.#validateEarningRate(income, rewards);
    const totalPrize = rewards.reduce((total, reward) => total + reward.getTotalPrize(), 0);
    return (totalPrize / income) * 100;
  }

  #validateEarningRate(income, rewards) {
    if (typeof income !== 'number') {
      throw new ApplicationError(Calculator.ERROR_MESSAGES.invalidIncome);
    }
    if (invalidInstanceElement(rewards, LottoReward)) {
      throw new ApplicationError(Calculator.ERROR_MESSAGES.invalidRewards);
    }
  }
}

export default Calculator;
