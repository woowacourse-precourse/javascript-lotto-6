import { Console } from "@woowacourse/mission-utils";
import { RESULT_MESSAGE } from "../lib/constants/message.js";

const OutputView = {
  printUserLottoQuanitiy(userLottoQuanitiy) {
    Console.print(`${userLottoQuanitiy}${RESULT_MESSAGE.COUNT}`);
  },

  printLottoList(user) {
    user.getLotto().forEach((lotto) => Console.print(lotto.getLottoNumber()));
  },
};

export default OutputView;
