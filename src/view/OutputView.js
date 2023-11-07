import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, LOTTO_INFO, OUTPUT_MESSAGE, PRIZE_MESSAGES } from "../utils/constants";


const OutputView = {};

OutputView.lottoGenerator = function ({ purchasedList }) {
  return Console.print([`${purchasedList.length}${OUTPUT_MESSAGE.PURCHASE_SUFFIX}`,
    ...purchasedList.map((numbers) => `[${numbers.join(", ")}] `),
  ].join("\n"));
};

OutputView.result = function ({ prizeResultMap, earningRate }) {
  return Console.print(
    [OUTPUT_MESSAGE.RESULT_HEADER, OUTPUT_MESSAGE.REUSLT_LINE,
      ...OutputView.prizeMessage(prizeResultMap),
      `총 수익률은 ${earningRate.toFixed(LOTTO_INFO.DECIMAL_POINT)}%입니다.`,
    ].join("\n"));
};

OutputView.err = function ({ message }) {
  if (Object.values(ERROR_MESSAGE).includes(message)) {
    return Console.print(message);
  } else {
    return Console.print(ERROR_MESSAGE.UNKNOWN_ERROR);
  }
};

OutputView.prizeMessage = function (prizeResultMap) {
  return OUTPUT_MESSAGE.RESULT_CHECK.map((message, index) => `${message} - ${prizeResultMap.get(5 - index) ?? 0}개`);
};

export default OutputView;