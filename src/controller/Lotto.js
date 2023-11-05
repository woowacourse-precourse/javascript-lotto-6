import { MissionUtils } from "@woowacourse/mission-utils";

import { MESSAGE } from '../data/message.js';
import { ERROR_MESSAGE } from '../data/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#isCheckProperNumberRange(numbers);
    this.#isCheckDuplicate(numbers);
    this.#isCheckProperNumberLength(numbers);
  };

  #isCheckDuplicate(numbers) {
    const filteredNumbers = new Set(numbers);
    if(filteredNumbers.size !== numbers.length) {
        throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATED_ERROR}`);
    }

    return this.#numbers;
  }

  #isCheckProperNumberRange(numbers) {
    for(const num of numbers) {
      if(+num < 1 || +num > 45) {
        throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
      }
    }

    return this.#numbers;
  }

  #isCheckProperNumberLength(numbers) {
    if(numbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
    }

    return this.#numbers;
  }

  async print(result, rate) {
    await MissionUtils.Console.print(`${MESSAGE.RESULT_INFO}\n---\n`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_THREE} ${result[3] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FOUR} ${result[4] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE} ${result[5] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE_BOUNS} ${result[5.5] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_SIX} ${result[6] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_RATE} ${rate}%입니다.`);
  }
}

export default Lotto;
