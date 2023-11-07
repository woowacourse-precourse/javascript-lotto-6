class Result {
  #threeMatch = 0;
  #fourMatch = 0;
  #fiveMatch = 0;
  #fiveBonusMatch = 0;
  #sixMatch = 0;
  #threeMatchAmount = 5000;
  #fourMatchAmount = 50000;
  #fiveMatchAmount = 1500000;
  #fiveBonusMatchAmount = 30000000;
  #sixMatchAmount = 2000000000;

  setResult(count, matchBonus) {
    if (count === 3) this.#setThreeMatch();
    if (count === 4) this.#setFourMatch();
    if (count === 5 && matchBonus === false) this.#setFiveMatch();
    if (count === 5 && matchBonus === true) this.#setFiveBonusMatch();
    if (count === 6) this.#setSixMatch();
  }

  #setThreeMatch() {
    this.#threeMatch = this.#threeMatch + 1;
  }
  #setFourMatch() {
    this.#fourMatch = this.#fourMatch + 1;
  }
  #setFiveMatch() {
    this.#fiveMatch = this.#fiveMatch + 1;
  }
  #setFiveBonusMatch() {
    this.#fiveBonusMatch = this.#fiveBonusMatch + 1;
  }
  #setSixMatch() {
    this.#sixMatch = this.#sixMatch + 1;
  }

  getThreeMatch() {
    return this.#threeMatch;
  }
  getFourMatch() {
    return this.#fourMatch;
  }
  getFiveMatch() {
    return this.#fiveMatch;
  }
  getFiveBonusMatch() {
    return this.#fiveBonusMatch;
  }
  getSixMatch() {
    return this.#sixMatch;
  }
  getPrizeAmount() {
    const prizeAmount =
      this.#threeMatch * this.#threeMatchAmount +
      this.#fourMatch * this.#fourMatchAmount +
      this.#fiveMatch * this.#fiveMatchAmount +
      this.#fiveBonusMatch * this.#fiveBonusMatchAmount +
      this.#sixMatch * this.#sixMatchAmount;

    return prizeAmount;
  }
}

export default Result;
