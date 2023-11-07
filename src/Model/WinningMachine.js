import WinningLotto from './WinningLotto.js';
import { PRIZE, PRIZE_STRUCTURE, SETTING } from '../constants/GameSetting.js';

const { DECIMAL_POINT, KEY_TITLE, MATCH_CONDITION, INCREASE, PERCENT } =
  SETTING;

class WinningMachine {
  #prizeStructure = PRIZE_STRUCTURE;

  #rateOfReturn;

  generateWinningLotto({ numbers, bonusNumber }) {
    return new WinningLotto({ numbers, bonusNumber });
  }

  calculateStatistics({ lotto, winningLotto }) {
    const lottoNumber = lotto.getNumbers();
    const winningNumber = winningLotto.getNumbers();

    const hasBonus = lotto.isInclude(winningLotto.getBonusNumber());
    const matchCount = this.#evaluateMatch({ lottoNumber, winningNumber });
    this.#updatePrizeStructure(matchCount, hasBonus);
  }

  calculateRateOfReturn(purchaseAmount) {
    const totalPrize = Object.keys(this.#prizeStructure).reduce(
      (acc, key) => acc + this.#prizeStructure[key] * PRIZE[key],
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

  #updatePrizeStructure(matchCount, hasBonus) {
    if (matchCount === MATCH_CONDITION && hasBonus) {
      this.#prizeStructure.match5Bonus += INCREASE;
      return;
    }

    const matchKey = `${KEY_TITLE}${matchCount}`;
    if (Object.prototype.hasOwnProperty.call(this.#prizeStructure, matchKey)) {
      this.#prizeStructure[matchKey] += INCREASE;
    }
  }

  getPrizeStructure() {
    return { ...this.#prizeStructure };
  }

  getRateOfReturn() {
    return this.#rateOfReturn;
  }
}

export default WinningMachine;
