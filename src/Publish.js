import { Random, Console } from '@woowacourse/mission-utils';
import { NUMBERS } from './Constants/Constants.js';
import OUTPUT_VIEW from './View/outputView.js';

export default class Publish {
  constructor(count) {
    this.count = count;
    this.publish = [];
    this.newRandomLotto();
  }

  newRandomLotto() {
    for (let i = 0; i < this.count; i += 1) {
      const randomLotto = Random.pickUniqueNumbersInRange(
        NUMBERS.MIN_LOTTO,
        NUMBERS.MAX_LOTTO,
        NUMBERS.LOTTO_SELECT_NUM,
      );
      this.publish.push(randomLotto);
      Console.print(this.publish[i]);
    }
  }
}
