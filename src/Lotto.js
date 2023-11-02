import { MissionUtils } from "@woowacourse/mission-utils";

import { MESSAGE } from './data/message.js';

class Lotto {
  #numbers;

  constructor(amount, lottoNumbers, numbers, bonus) {
    this.amount = amount;
    this.lottoNumbers = lottoNumbers;
    this.#numbers = numbers;
    this.bonus = bonus;
  };

  calculateResult() {
    let result = [];
    for(let lotto = 0; lotto < this.lottoNumbers.length; lotto++) {
      let count = 0;

      for(let number = 0; number < this.lottoNumbers[lotto].length; number++) {
        if(this.lottoNumbers[lotto].includes(+this.#numbers[number])) {
          count += 1
        }
      }
      if(count >= 3) {
        result.push(count);
      }

    }
    const countedResult = result.reduce((allCount, count) => {
      if(count in allCount) {
        allCount[count] += 1;
      } else {
        allCount[count] = 1;
      }

      return allCount;
    }, {});

    this.print(countedResult);
  };


  async print(result, rate) {
    await MissionUtils.Console.print(`${MESSAGE.RESULT_INFO}\n---\n`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_THREE} ${result[3] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FOUR} ${result[4] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE} ${result[5] ?? 0}개`);
    // await MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE_BOUNS} ${result[5] ?? 0}`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_SIX} ${result[6] ?? 0}개`);
  }
}

export default Lotto;
