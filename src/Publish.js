import { Random, Console } from '@woowacourse/mission-utils';
import { NUMBERS } from './Constants/Constants.js';
import OUTPUT_VIEW from './View/outputView.js';
import Lotto from './Lotto.js';

export default class Publish {
  constructor(count) {
    this.count = count;
    this.publish = [];
    this.publishLotto();
  }

  publishLotto() {
    for (let i = 0; i < this.count; i += 1) {
      const allLotto = this.createLotto();
      this.publish.push(allLotto);
    }
    this.publish.forEach((lotto) => {
      lotto.toString();
    });
  }

  createLotto() {
    const randomLotto = Random.pickUniqueNumbersInRange(
      NUMBERS.MIN_LOTTO,
      NUMBERS.MAX_LOTTO,
      NUMBERS.LOTTO_SELECT_NUM,
    );

    return new Lotto(randomLotto);
  }

  getRank(winning, bonus) {
    // ranking 배열에 각 로또의 등수 push
    const ranking = [];
    this.publish.forEach((lotto) => {
      ranking.push(lotto.getResult(winning, bonus));
    });
    return ranking;
  }
}
