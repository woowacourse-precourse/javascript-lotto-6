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

  // - 수익률은 [(총 당첨금액) / (구입금액) \* 100](%) 로 나타낸다.
  // - 3개 일치 (5,000원) 5
  // - 4개 일치 (50,000원) 4
  // - 5개 일치 (1,500,000원) 3
  // - 5개 일치, 보너스 볼 일치 (30,000,000원) 2
  // - 6개 일치 (2,000,000,000원) 1

  getStatistics(lottoCount, rankingArr) {
    let earnings = 0;
    const earningArr = rankingArr.map((ranking) => {
      if (ranking === 1) return NUMBERS.FIFTH_AMOUT;
      if (ranking === 2) return NUMBERS.SECOND_AMOUNT;
      if (ranking === 3) return NUMBERS.THIRD_AMOUNT;
      if (ranking === 4) return NUMBERS.FOURTH_AMOUNT;
      if (ranking === 5) return NUMBERS.FIFTH_AMOUT;
      return 0;
    });
    earningArr.forEach((earn) => {
      earnings += earn;
    });
    const TOTAL_PURCHASE = lottoCount * NUMBERS.LOTTO_PRICE;
    const STATISTICS = (earnings / TOTAL_PURCHASE) * 100;
    return STATISTICS;
  }
}
