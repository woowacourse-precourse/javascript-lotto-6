import { Random } from '@woowacourse/mission-utils';
import { SETTING } from './constants/Constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.#validate(numbers);
    this.#numbers = numbers;
  }

  // #validate(numbers) {
  //   console.log(numbers);
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }
  // }

  generateLotto() {
    this.#numbers = Random.pickUniqueNumbersInRange(SETTING.start, SETTING.end, SETTING.pick);
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
