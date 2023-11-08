class Prize {
  #matchLottoCnt;

  #rewards;

  constructor(matchLottoNums, rewards) {
    this.#matchLottoCnt = matchLottoNums;
    this.#rewards = rewards;
  }

  getRewards() {
    return this.#rewards;
  }

  getMatchLottoCnt() {
    return this.#matchLottoCnt;
  }

  canReceive(lotto, winningLotto) {
    return winningLotto.countMatchingNumbers(lotto) === this.#matchLottoCnt;
  }
}

export default Prize;
