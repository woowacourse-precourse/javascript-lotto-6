import { LOTTO_PRIZE } from './constants/constant.js';

class CompareLottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = this.#splitedNumbers(winningNumbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  compareLottoNumbers(lottos) {
    const matchedLottos = lottos.map((lotto) => {
      return [this.#countMatchedNumbers(lotto), this.#isBonusNumber(lotto)];
    });

    const result = this.#formatMatchedNumbers(this.#filterMatchedNumbers(matchedLottos));
    return result;
  }

  #filterMatchedNumbers(matchedLottos) {
    const result = Array.from({ length: Object.keys(LOTTO_PRIZE).length }).fill(0);
    const { FIFTH, FOURTH, THIRD, SECOND, FIRST } = LOTTO_PRIZE;

    matchedLottos.forEach(([matchedCount, hasBonus]) => {
      if (matchedCount === FIFTH.MATCH_CRITERIA) result[FIFTH.INDEX] += 1;
      if (matchedCount === FOURTH.MATCH_CRITERIA) result[FOURTH.INDEX] += 1;
      if (matchedCount === THIRD.MATCH_CRITERIA && !hasBonus) result[THIRD.INDEX] += 1;
      if (matchedCount === SECOND.MATCH_CRITERIA && hasBonus) result[SECOND.INDEX] += 1;
      if (matchedCount === FIRST.MATCH_CRITERIA) result[FIRST.INDEX] += 1;
    });

    return result;
  }

  #formatMatchedNumbers(filterdMatchedNumbers) {
    const prizeList = Object.values(LOTTO_PRIZE).map((item) => item.PRIZE);
    const matchCriteriaList = Object.values(LOTTO_PRIZE).map((item) => item.MATCH_CRITERIA);

    const result = prizeList.map((prize, index) => ({
      prize,
      matchCriteria: matchCriteriaList[index],
      matchedNumber: filterdMatchedNumbers[index],
    }));

    return result;
  }

  #splitedNumbers(numbers) {
    return numbers.split(',').map((number) => Number(number));
  }

  #countMatchedNumbers(lotto) {
    const result = this.#winningNumbers.reduce((totalMatchedCount, winningNumber) => {
      return lotto.includes(winningNumber) ? totalMatchedCount + 1 : totalMatchedCount;
    }, 0);

    return result;
  }

  #isBonusNumber(lotto) {
    return lotto.includes(this.#bonusNumber);
  }
}

export default CompareLottoMachine;
