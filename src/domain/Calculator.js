import LottoReward from './LottoReward.js';

import { invalidInstanceElement } from '../utils/validator.js';

import ApplicationError from '../exceptions/ApplicationError.js';

class Calculator {
  /**
   * 계산기 관련 오류메세지입니다.
   * @readonly
   */
  static ERROR_MESSAGES = Object.freeze({
    invalidIncome: 'earningRate의 income에 숫자를 입력해주세요!',
    invalidRewards: 'earningRate의 rewards에 LottoReward가 아닌 값이 존재합니다!',
  });

  /**
   * 반올림될 소숫점 자릿수입니다.
   * @readonly
   */
  static DIGIT = 1;

  /**
   * @returns {Calculator} 계산기입니다.
   */
  static of() {
    return new Calculator();
  }

  /**
   * LottoRewards의 수익률을 계산합니다.
   * @param {number} income 지출입니다.
   * @param {LottoReward[]} rewards 로또 결과 배열입니다.
   * @returns {number} 로또 결과의 수익률입니다.
   */
  earningRate(income, rewards) {
    this.#validateEarningRate(income, rewards);

    const totalPrize = rewards.reduce((total, reward) => total + reward.getTotalPrize(), 0);
    const earningRate = (totalPrize / income) * 100;

    return Number.isInteger(earningRate)
      ? earningRate
      : Number(earningRate.toFixed(Calculator.DIGIT));
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
