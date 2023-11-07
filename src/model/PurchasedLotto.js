class PurchasedLotto {
  #numbers;
  #matchedNumberCount;
  #matchedBonusCount;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  setMatchCount(numberCount, bonusCount) {
    this.#matchedNumberCount = numberCount;
    this.#matchedBonusCount = bonusCount;
  }

  getMatchedNumberCount() {
    return this.#matchedNumberCount;
  }

  getMatchedBonusCount() {
    return this.#matchedBonusCount;
  }
}

export default PurchasedLotto;
