import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, RESULT, resultOrder } from "../constant/gameMessge.js";

const OutputView = {
  printPurchaseAmout(lottos) {
    MissionUtils.Console.print(MESSAGE.result.Amount(lottos.length));
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.toPrintableString());
    });
  },

  printResults(results, roi) {
    MissionUtils.Console.print(MESSAGE.result.title);

    for (const key of resultOrder) {
      const count = results[key] || 0;
      const prize = RESULT.prizeMap[key];
      MissionUtils.Console.print(
        `${RESULT.resultMessages[key]} (${prize.toLocaleString()}원) - ${count}개`,
      );
    }
    MissionUtils.Console.print(MESSAGE.result.benefit(roi));
  },
};

export default OutputView;
