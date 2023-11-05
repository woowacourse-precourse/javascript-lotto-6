import LOTTO from '../constant/Lotto.js';
import calcMatchCount from '../utils/calcMatchCount.js';

class LottosMatcher {
  #matchResult;

  matchResults(lottos, bonus, selectedLotto) {
    this.#matchResult = new Array(LOTTO.prizeCount).fill(0);

    lottos.forEach((lotto) => {
      const [matchCount, isBonus] = this.#singleMatch(
        lotto,
        bonus,
        selectedLotto,
      );

      this.#updateMatchResult(matchCount, isBonus);
    });

    return this.#matchResult;
  }

  #singleMatch(lotto, bonus, selectedLotto) {
    // console.log(this.#matchResult); // 걍 넣어놓음
    const matchCount = calcMatchCount(lotto, selectedLotto);
    const isBonus = lotto.includes(bonus);

    return [matchCount, isBonus];
  }

  #updateMatchResult(matchCount, isBonus) {
    if (matchCount === LOTTO.count)
      this.#matchResult[this.#matchResult.length - 1] += 1;
    else if (matchCount === LOTTO.count - 1 && isBonus)
      this.#matchResult[this.#matchResult.length - 2] += 1;
    else if (matchCount < LOTTO.count && matchCount >= LOTTO.minMatchCount)
      this.#matchResult[matchCount - LOTTO.minMatchCount] += 1;
  }
}

export default LottosMatcher;
