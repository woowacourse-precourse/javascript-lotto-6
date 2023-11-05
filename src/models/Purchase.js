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
};

export default purchase;
