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
  #prizeMoney = 0;

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

  #calcPrizeMoney() {
    Object.entries(this.#matchCount).forEach(([key, value]) => {
      this.#prizeMoney += GAME_REWARD[key] * value;
    });
  }

  getPrizeMoney() {
    this.#calcPrizeMoney();

    return this.#prizeMoney;
  }

  getProfit(userMoney, prizeMoney) {
    return calcProfit(userMoney, prizeMoney);
  }
}

export default LottoResult;
