import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class lottoMachine {
  static make(lottoCount) {
    const lottoArray = [];

    Array.from({ length: lottoCount }).forEach(() => {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumbers);
      lottoArray.push(lotto);
    });

    return lottoArray;
  }

  static find(lotto, winningNumbers) {
    const result = {
      matchCount: 0,
      notMatchNumber: 0,
    };

    lotto.getNumbers().filter((num) => {
      if (winningNumbers.includes(num)) result.matchCount += 1;
      else result.notMatchNumber = num;
    });

    return result;
  }

  static read(resultArray, bonusNumber) {
    const prize = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    resultArray.forEach((result) => {
      if (result.matchCount === 6) prize.first += 1;
      if (result.matchCount === 5 && result.notMatchNumber === bonusNumber) prize.second += 1;
      if (result.matchCount === 5 && result.notMatchNumber !== bonusNumber) prize.third += 1;
      if (result.matchCount === 4) prize.fourth += 1;
      if (result.matchCount === 3) prize.fifth += 1;
    });
  }
}

export default lottoMachine;
