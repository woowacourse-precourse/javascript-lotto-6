import { Random } from "@woowacourse/mission-utils";

import { error, lottoInfo } from "../constants";
import Lotto from "./Lotto";

const purchase = {
  countMoney: function (money) {
    validate(money);
    return parseInt(money / lottoInfo.PRICE);
  },

  validate: function (money) {
    if (money % lottoInfo.PRICE !== 0)
      throw new Error(error.NOT_DIVEDED_BY_1000);
  },

  getLottos: function (count) {
    let lottos = [];

    for (let i = 0; i < count; i++) {
      const numbers = this.pickLottoNumbers();
      lottos.push(new Lotto(numbers));
    }

    return lottos;
  },

  pickLottoNumbers: function () {
    const numbers = Random.pickUniqueNumbersInRange(
      lottoInfo.START_INCLUSIVE,
      lottoInfo.END_INCLUSIVE,
      lottoInfo.COUNT
    );
    const sorted = this.sortInAscendingOrder(numbers);

    return sorted;
  },

  sortInAscendingOrder: function (arr) {
    arr.sort((a, b) => a - b);
  },
};

export default purchase;
