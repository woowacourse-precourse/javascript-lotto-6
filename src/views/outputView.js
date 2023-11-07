import { Console } from "@woowacourse/mission-utils";
import { RESLT_MESSAGE } from "../lib/constants/message.js";

const OutputView = {
  printUserLottoQuanitiy(userLottoQuanitiy) {
    Console.print(`${userLottoQuanitiy}${RESLT_MESSAGE.COUNT}`);
  },

  printLottoList(user) {
    user.getLotto().forEach((lotto) => Console.print(lotto));
  },
};

export default OutputView;
