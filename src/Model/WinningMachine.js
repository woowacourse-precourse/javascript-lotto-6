import WinningLotto from './WinningLotto.js';
import { PRIZE, PRIZE_STRUCTURE, SETTING } from '../constants/GameSetting.js';

const { DECIMAL_POINT, KEY_TITLE, MATCH_CONDITION, INCREASE, PERCENT } =
  SETTING;

class WinningMachine {
  #matchResult = PRIZE_STRUCTURE;

  #rateOfReturn;

  generateWinningLotto({ numbers, bonusNumber }) {
    return new WinningLotto({ numbers, bonusNumber });
  }

  calculateStatistics({ lotto, winningLotto }) {
    const lottoNumber = lotto.getNumbers();
    const winningNumber = winningLotto.getNumbers();

    const hasBonus = lotto.isInclude(winningLotto.getBonusNumber());
    const matchCount = this.#evaluateMatch({ lottoNumber, winningNumber });
    this.#updateMatchResult(matchCount, hasBonus);
  }

  calculateRateOfReturn(purchaseAmount) {
    const totalPrize = Object.keys(this.#matchResult).reduce(
      (acc, key) => acc + this.#matchResult[key] * PRIZE[key],
      0,
    );

    this.#rateOfReturn = (
      (totalPrize / Number(purchaseAmount)) *
      PERCENT
    ).toFixed(DECIMAL_POINT);
  }

  #evaluateMatch({ lottoNumber, winningNumber }) {
    return lottoNumber.filter((number) => winningNumber.includes(number))
      .length;
  }

  #updateMatchResult(matchCount, hasBonus) {
    if (matchCount === MATCH_CONDITION && hasBonus) {
      this.#matchResult.match5Bonus += INCREASE;
      return;
    }

    const matchKey = `${KEY_TITLE}${matchCount}`;
    if (Object.prototype.hasOwnProperty.call(this.#matchResult, matchKey)) {
      this.#matchResult[matchKey] += INCREASE;
    }
  }

  getMatchResult() {
    return { ...this.#matchResult };
  }

  getRateOfReturn() {
    return this.#rateOfReturn;
  }
}

export default WinningMachine;
