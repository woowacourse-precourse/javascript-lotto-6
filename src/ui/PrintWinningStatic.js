import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";
import winMessages from "../common/winMessage.js";
import calculateTotalProfitRate from "../controller/result/calculateTotalProfitRate.js";

const printWinningStatic = (price, count) => {
  Console.print(`${Messages.PRINT_WINNING_STATICS_MESSAGE}`);
  winMessages.forEach((msg, i) => {
    Console.print(`${msg}${count[i]}개`);
  });
  Console.print(
    `총 수익률은 ${calculateTotalProfitRate(price, count)}%입니다.`
  );
};

export default printWinningStatic;
