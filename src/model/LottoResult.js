import { GAME_REWARD } from '../constants/gameRule.js';
import calcProfit from '../utils/calcProfit.js';

class LottoResult {
  #winningNumbers;
  #bonusNumber;
  #matchCount = {
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    bonus: 0,
  };

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getWinningNumbers() {
    return [...this.#winningNumbers];
  }

  setMatchCount(matchResults) {
    matchResults.forEach(({ count, hasBonusNumber }) => {
      const countKey = this.#getCountKey(count, hasBonusNumber);
      if (!countKey) return;
      this.#matchCount[countKey] += 1;
    });
  }

  #getCountKey(winningNumberCount, hasBonusNumber) {
    if (winningNumberCount === 5 && hasBonusNumber) {
      return 'bonus';
    }

    const keyMap = {
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
    };

    return keyMap[String(winningNumberCount)] || null;
  }

  getMatchCount() {
    return {
      ...this.#matchCount,
    };
  }

  getPrizeMoney() {
    return Object.entries(this.#matchCount).reduce((acc, [key, value]) => {
      if (value === 0) return acc;
      return acc + GAME_REWARD[key] * value;
    }, 0);
  }

  getProfit(purchaseAmount) {
    const prizeMoney = this.getPrizeMoney();
    return calcProfit(purchaseAmount, prizeMoney);
  }
}

export default LottoResult;
