export const MATCHED_RESULT = {
  miss: "miss",
  three: "three",
  four: "four",
  five: "five",
  fiveBonus: "fiveBonus",
  six: "six",
};

class LottoResult {
  #matchedCount;

  #bonusIncluded;

  constructor(matchedCount, bonusIncluded) {
    this.#matchedCount = matchedCount;
    this.#bonusIncluded = bonusIncluded;
  }

  getResult() {
    if (this.#matchedCount < 3) return MATCHED_RESULT.miss;
    if (this.#matchedCount === 3) return MATCHED_RESULT.three;
    if (this.#matchedCount === 4) return MATCHED_RESULT.four;
    if (this.#matchedCount === 5) {
      if (this.#bonusIncluded) return MATCHED_RESULT.fiveBonus;
      return MATCHED_RESULT.five;
    }
    if (this.#matchedCount === 6) return MATCHED_RESULT.six;

    return MATCHED_RESULT.miss;
  }
}

export default LottoResult;
