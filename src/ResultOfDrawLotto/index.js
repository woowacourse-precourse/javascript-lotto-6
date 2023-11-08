import LOTTO from "../constants/lotto.js";
import mapCountToResultKey from "./mapCountToResultKey.js";

class ResultOfDrawLotto {
  #result;

  constructor() {
    this.#result = {
      [LOTTO.rankKey.firstPlace]: 0,
      [LOTTO.rankKey.secondPlace]: 0,
      [LOTTO.rankKey.thirdPlace]: 0,
      [LOTTO.rankKey.fourthPlace]: 0,
      [LOTTO.rankKey.fifthPlace]: 0,
      [LOTTO.rankKey.blank]: 0,
    };
  }

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
