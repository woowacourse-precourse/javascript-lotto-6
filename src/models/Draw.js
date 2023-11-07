import { Random } from "@woowacourse/mission-utils";
import { lottoInfo } from "../constants.js";

const draw = {
  /*
   * purchased: 사용자가 구매한 로또
   * winning: 사용자가 입력한 당첨 번호
   * bounus: 사용자가 입력한 보너스 번호
   */
  getResult: function (purchased, winning, bounus) {
    let matches = this.getLottoMatches(purchased, winning);
    const count = this.getBounusMatches(matches, bounus);
    matches.splice(3, 0, count);

    return matches;
  },

  /* 5등, 4등, 3등, 1등 개수의 개수를 반환한다. */
  getLottoMatches: function (lottos, winning) {
    let matches = [0, 0, 0, 0]; // 5등, 4등, 3등, 1등 개수

    lottos.forEach((lotto) => {
      const count = this.countMatches(lotto, winning);
      if (count >= 3) matches[count - 3]++;
    });

    return matches;
  },

  /* 로또번호와 당첨번호가 일치하는 개수를 센다. */
  countMatches: function (lotto, winning) {
    let count = 0;
    winning.forEach((number) => {
      if (lotto.includes(number)) count++;
    });

    return count;
  },

  /* 2등의 개수를 반환한다. */
  getBounusMatches: function (matches, bounus) {
    let count = 0;

    if (bounus === this.pickBounusNumber()) {
      count = matches[2];
    }

    return count;
  },

  pickBounusNumber: function () {
    const number = Random.pickUniqueNumbersInRange(
      lottoInfo.START_INCLUSIVE,
      lottoInfo.END_INCLUSIVE,
      1
    );

    return number;
  },
};

export default draw;
