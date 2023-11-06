import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/MESSAGE";

const Output = {
  printCountOfLotto(count) {
    Console.print(MESSAGE.OUTPUT.PURCHASE_COUNT(count));
  },

  printLotto(lotto) {
    Console.print(MESSAGE.OUTPUT.LOTTO_NUMBER(lotto));
  },

  printResult(result) {
    Console.print(MESSAGE.OUTPUT.RESULT_HEADER);
    Console.print(MESSAGE.OUTPUT.RESULT(result));
  },

  printProfit(profit) {
    Console.print(MESSAGE.OUTPUT.PROFIT(profit));
  },
};

export default Output;
