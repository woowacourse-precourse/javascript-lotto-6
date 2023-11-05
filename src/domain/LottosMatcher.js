import LOTTO from '../constant/Lotto.js';

class LottosMatcher {
  #prizeCount;

  calcPrizeCount(lottos, winningLotto, bonusNumber) {
    this.#prizeCount = new Array(LOTTO.prizeCount).fill(0);

    lottos.forEach((lotto) => {
      const matchResult = this.#matchResult(lotto, winningLotto, bonusNumber);

      this.#updatePrizeCount(matchResult);
    });

    return this.#prizeCount;
  }

  #matchResult(lotto, winningLotto, bonusNumber) {
    const matchCount = lotto.getMatchCount(winningLotto);
    const isBonus = lotto.checkBonusMatch(bonusNumber);

    return [matchCount, isBonus];
  }

  #updatePrizeCount(matchResult) {
    this.#prizeCount[this.#getPrizeIndex(matchResult)] += 1;
  }

  #getPrizeIndex([matchCount, isBonus]) {
    if (this.#isWin(matchCount)) return this.#prizeCount.length - 1;
    if (this.#isBonusMatch(matchCount, isBonus))
      return this.#prizeCount.length - 2;
    if (this.#isRemainedValidMatch(matchCount))
      return matchCount - LOTTO.minMatchCount;

    return -1; // TODO 오류 처리필요
  }

  #isWin(matchCount) {
    return matchCount === LOTTO.count;
  }

  #isBonusMatch(matchCount, isBonus) {
    return matchCount === LOTTO.count - 1 && isBonus;
  }

  #isRemainedValidMatch(matchCount) {
    return matchCount < LOTTO.count && matchCount >= LOTTO.minMatchCount;
  }
}

export default LottosMatcher;
