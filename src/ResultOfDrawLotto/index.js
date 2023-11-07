import LOTTO from "../constants/lotto.js";
import mapCountToResultKey from "./mapCountToResultKey.js";

class ResultOfDrawLotto {
  #result;

  constructor() {
    this.#result = {
      [LOTTO.rank.firstPlace]: 0,
      [LOTTO.rank.secondPlace]: 0,
      [LOTTO.rank.thirdPlace]: 0,
      [LOTTO.rank.fourthPlace]: 0,
      [LOTTO.rank.fifthPlace]: 0,
      [LOTTO.rank.blank]: 0,
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
      key = mapCountToResultKey[countOfMatchingNumber][isMatchBonus];
    } else {
      key = mapCountToResultKey[countOfMatchingNumber];
    }

    this.#result[key] += 1;
  }
}

export default ResultOfDrawLotto;
