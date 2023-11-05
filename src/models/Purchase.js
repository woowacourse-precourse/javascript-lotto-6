import { Random } from "@woowacourse/mission-utils";

import { lottoInfo } from "../constants";
import Lotto from "./Lotto";

const purchase = {
  countMoney: function (money) {
    if (money % lottoInfo.PRICE !== 0) {
      // 예외 처리
    }
    return money / lottoInfo.PRICE;
  },

  getLottos: function (number) {
    let lottos = [];

    for (let i = 0; i < number; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        lottoInfo.START_INCLUSIVE,
        lottoInfo.END_INCLUSIVE,
        lottoInfo.COUNT
      );
      const sorted = this.sortInAscendingOrder(numbers);
      lottos.push(new Lotto(sorted));
    }

    return lottos;
  },

  sortInAscendingOrder: function (arr) {
    arr.sort((a, b) => a - b);
  },
};

export default purchase;
