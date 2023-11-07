import LOTTO from "../constants/lotto.js";

const mapCountToKey = Object.freeze({
  [LOTTO.length]: "matchSix",
  [LOTTO.length - 1]: Object.freeze({
    [true]: "matchFiveAndBonus",
    [false]: "matchFive",
  }),
  [LOTTO.length - 2]: "matchFour",
  [LOTTO.length - 3]: "matchThree",
});

class ResultOfDrawLotto {
  #result;

  constructor() {
    this.#result = {
      matchSix: 0,
      matchFiveAndBonus: 0,
      matchFive: 0,
      matchFour: 0,
      matchThree: 0,
    };
  }

  /**
   * @returns {{ matchSix: number, matchFiveAndBonus: number, matchFive: number, matchFour: number, matchThree: number }}
   */
  getResult() {
    return { ...this.#result };
  }

  /**
   * @description 로또 추첨 결과 반영 (카운팅)
   * @param {number} countOfMatchingNumber
   * @param {boolean} isMatchBonus
   */
  increaseResultOfDraw(countOfMatchingNumber, isMatchBonus = false) {
    if (countOfMatchingNumber === LOTTO.length - 1) {
      const key = mapCountToKey[countOfMatchingNumber][isMatchBonus];
      this.#result[key] += 1;
      return;
    }

    const key = mapCountToKey[countOfMatchingNumber];
    this.#result[key] += 1;
  }
}

export default ResultOfDrawLotto;
