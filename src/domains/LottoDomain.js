import Lotto from '../Lotto.js';
import { NUMBER, number } from '../constants.js';
import { Random } from '@woowacourse/mission-utils';

class LottoMachine {
  static make(lottoCount) {
    const lottoArray = [];

    Array.from({ length: lottoCount }).forEach(() => {
      const lottoNumbers = this.makeNumbers(NUMBER.START, NUMBER.LAST, NUMBER.LOTTO_LENGTH);
      lottoNumbers.sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);
      lottoArray.push(lotto);
    });

    return lottoArray;
  }

  static makeNumbers(start, end, length) {
    return Random.pickUniqueNumbersInRange(start, end, length);
  }

  static find(lotto, winningNumbers) {
    const result = {
      matchCount: NUMBER.DEFAULT,
      notMatchNumber: NUMBER.DEFAULT,
    };

    lotto.getNumbers().filter((num) => {
      if (winningNumbers.includes(num)) result.matchCount += NUMBER.ADD;
      else result.notMatchNumber = num;
    });

    return result;
  }

  static read(resultObject, bonusNumber) {
    const rank = Array.from({ length: NUMBER.LOTTO_LENGTH }, () => NUMBER.DEFAULT);

    resultObject.forEach((result) => {
      switch (result.matchCount) {
        case NUMBER.LOTTO_LENGTH:
          rank[number.first] += NUMBER.ADD;
          break;
        case NUMBER.SECOND_THIRD:
          if (result.notMatchNumber === bonusNumber) rank[number.second] += NUMBER.ADD;
          else rank[number.third] += NUMBER.ADD;
          break;
        case NUMBER.FOURTH:
          rank[number.fourth] += NUMBER.ADD;
          break;
        case NUMBER.FIFTH:
          rank[number.fifth] += NUMBER.ADD;
          break;
        default:
      }
    });

    return rank;
  }
}

export default LottoMachine;
