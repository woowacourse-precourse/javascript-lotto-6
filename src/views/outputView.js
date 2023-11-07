import { Console } from "@woowacourse/mission-utils";
import { RESLT_MESSAGE } from "../lib/constants/message.js";
import WORD from "../lib/constants/word.js";

const OutputView = {
  printUserLottoQuanitiy(payment) {
    Console.print(`${payment / WORD.LOTTOPRICE}${RESLT_MESSAGE.COUNT}`);
  },
};

export default OutputView;
