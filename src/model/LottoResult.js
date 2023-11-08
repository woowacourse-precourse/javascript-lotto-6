class LottoResult {
  #matchingCount;
  #includesBonus;

  constructor(matchingCount, includesBonus) {
    this.#matchingCount = matchingCount;
    this.#includesBonus = includesBonus;
  }

  getMatchingCount() {
    return this.#matchingCount;
  }

  getIncludesBonus() {
    return this.#includesBonus;
  }
}

export default LottoResult;
