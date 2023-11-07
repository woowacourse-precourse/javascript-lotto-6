import { Random } from "@woowacourse/mission-utils";
import { lottoInfo } from "../constants";

const draw = {
  /*
   * winning: 사용자가 입력한 당첨 번호
   * bounus: 사용자가 입력한 보너스 번호
   * purchased: 사용자가 구매한 로또
   */
  getResult: function (purchased, winning, bounus) {
    const matches = this.getLottoMatches(purchased, winning);
    const result = this.addBounusMatches(matches, bounus);

    return result;
  },

  getLottoMatches: function (lottos, winning) {
    let matches = [0, 0, 0, 0]; // (3개 일치하는 개수)부터 (6개 일치하는 개수)

    lottos.forEach((lotto) => {
      const count = this.countMatches(lotto, winning);
      if (count >= 3) matches[count - 3]++;
    });

    return matches;
  },

  countMatches: function (lotto, winning) {
    let count = 0;
    winning.forEach((number) => {
      if (lotto.includes(number)) count++;
    });

    return count;
  },

  addBounusMatches: function (matches, bounus) {
    if (bounus === this.pickBounusNumber()) {
      const fiveMatches = matches[2];
      matches.splice(3, 0, fiveMatches);
    }

    return matches;
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
