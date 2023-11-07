import { Console } from "@woowacourse/mission-utils";
import {
  MESSAGE_ALERT,
  MESSAGE_RESULT,
  MESSAGE_ERROR,
} from "../static/Static.js";

const OutputView = {
  printBlankLine() {
    Console.print("");
  },
  printPurchaseQuantity(purchaseQuantity) {
    Console.print(`${purchaseQuantity}${MESSAGE_ALERT.quantity}`);
  },
  printLotto(lotto) {
    Console.print(lotto);
  },
  printResult(winningStatistic) {
    Console.print(MESSAGE_ALERT.beforeResult);
    for (let rank in winningStatistic) {
      Console.print(`${MESSAGE_RESULT[rank]} - ${winningStatistic[rank]}개`);
    }
  },
  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },
  printPurchasePriceError(error) {
    if (error.message.includes(MESSAGE_ERROR.purchasePrice)) {
      Console.print(error.message);
    }
    if (error.message.includes(MESSAGE_ERROR.blank)) {
      Console.print(error.message);
    }
  },
};

export default OutputView;
