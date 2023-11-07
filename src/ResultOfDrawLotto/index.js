import LOTTO from "../constants/lotto.js";

const mapCountToKey = Object.freeze({
  [LOTTO.length]: LOTTO.rank.firstPlace,
  [LOTTO.length - 1]: Object.freeze({
    [true]: LOTTO.rank.secondPlace,
    [false]: LOTTO.rank.thirdPlace,
  }),
  [LOTTO.length - 2]: LOTTO.rank.fourthPlace,
  [LOTTO.length - 3]: LOTTO.rank.fifthPlace,
});

class ResultOfDrawLotto {
  #result;

  constructor() {
    this.#result = {
      [LOTTO.rank.firstPlace]: 0,
      [LOTTO.rank.secondPlace]: 0,
      [LOTTO.rank.thirdPlace]: 0,
      [LOTTO.rank.fourthPlace]: 0,
      [LOTTO.rank.fifthPlace]: 0,
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
    let key;

    if (countOfMatchingNumber === LOTTO.length - 1) {
      key = mapCountToKey[countOfMatchingNumber][isMatchBonus];
    } else {
      key = mapCountToKey[countOfMatchingNumber];
    }

    this.#result[key] += 1;
  }
}

export default ResultOfDrawLotto;
