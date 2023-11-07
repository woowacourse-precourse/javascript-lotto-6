import { Random } from "@woowacourse/mission-utils";

import { error, lottoInfo } from "../constants.js";
import Lotto from "./Lotto.js";
import { throwErrorIf } from "../utils/index.js";

const purchase = {
  countMoney: function (money) {
    this.validate(money);
    return parseInt(money / lottoInfo.PRICE);
  },

  validate: function (money) {
    throwErrorIf(money % lottoInfo.PRICE !== 0, error.NOT_DIVEDED_BY_1000);
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

    return numbers;
  },
};

export default purchase;
