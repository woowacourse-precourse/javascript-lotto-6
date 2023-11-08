import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, LOTTO_INFO, OUTPUT_MESSAGE } from "../Utils/constants";


class OutputView {
  static printPurchasedList({ purchasedList }) {
    Console.print([ `${purchasedList.length}${OUTPUT_MESSAGE.PURCHASE_SUFFIX}`,
        ...purchasedList.map((numbers) => `[${numbers.join(", ")}] `),
      ].join("\n"),
    );
  }

  static printResult({ prizeResultMap, earningRate }) {
    Console.print(
      [ OUTPUT_MESSAGE.RESULT_HEADER, OUTPUT_MESSAGE.REUSLT_LINE,
        ...OutputView.#prizeMessage(prizeResultMap),
        `총 수익률은 ${earningRate.toFixed(LOTTO_INFO.DECIMAL_POINT)}%입니다.`,
      ].join("\n"),
    );
  }

  static printError({ message }) {
    if (Object.values(ERROR_MESSAGE).includes(message)) Console.print(message);
    else Console.print(ERROR_MESSAGE.UNKNOWN_ERROR);
  }

  static #prizeMessage(prizeResultMap) {
    return OUTPUT_MESSAGE.RESULT_CHECK.map((message, index) => `${message} - ${prizeResultMap.get(5 - index) ?? 0}개`);
  }
}

export default OutputView; 
