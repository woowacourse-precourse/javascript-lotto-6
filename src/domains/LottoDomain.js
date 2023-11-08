import Lotto from '../Lotto.js';
import { NUMBER, number } from '../constants.js';
import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  #make(lottoCount) {
    return Array.from({ length: lottoCount }).map(() => {
      const lottoNumbers = this.#makeNumbers(NUMBER.START, NUMBER.LAST, NUMBER.LOTTO_LENGTH);
      lottoNumbers.sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);
      return lotto;
    });
  }

  #makeNumbers(start, end, length) {
    return Random.pickUniqueNumbersInRange(start, end, length);
  }

  doMake(lottoCount) {
    return this.#make(lottoCount);
  }

  static find(lotto, winningNumbers) {
    const result = {
      matchCount: NUMBER.DEFAULT,
      notMatchNumber: NUMBER.DEFAULT,
    };

    lotto.getNumbers().forEach((num) => {
      if (winningNumbers.includes(num)) result.matchCount += NUMBER.ADD;
      else result.notMatchNumber = num;
    });

    return result;
  }

  static read(resultObject, bonusNumber) {
    const rank = Array.from({ length: NUMBER.LOTTO_LENGTH }, () => NUMBER.DEFAULT);
    resultObject.forEach((result) => {
      const { matchCount, notMatchNumber } = result;
      if (matchCount === NUMBER.LOTTO_LENGTH) rank[number.first] += NUMBER.ADD;
      if (matchCount === NUMBER.FOURTH) rank[number.fourth] += NUMBER.ADD;
      if (matchCount === NUMBER.FIFTH) rank[number.fifth] += NUMBER.ADD;
      if (matchCount === NUMBER.SECOND_THIRD && notMatchNumber === bonusNumber) {
        rank[number.second] += NUMBER.ADD;
      }
      if (matchCount === NUMBER.SECOND_THIRD && notMatchNumber !== bonusNumber) {
        rank[number.third] += NUMBER.ADD;
      }
    });
    return rank;
  }
}

export default LottoMachine;
