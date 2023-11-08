import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, GAME, RESULT_ORDER } from "../constant/gameMessge.js";

const OutputView = {
  printPurchaseAmout(lottos) {
    MissionUtils.Console.print(MESSAGE.result.Amount(lottos.length));
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.toPrintableString());
    });
  },

  printResults(results, roi) {
    MissionUtils.Console.print(MESSAGE.result.title);

    for (const key of RESULT_ORDER) {
      const count = results[key] || 0;
      const prize = GAME.prizeMap[key];
      MissionUtils.Console.print(
        `${GAME.resultMessages[key]} (${prize.toLocaleString()}원) - ${count}개`,
      );
    }
    MissionUtils.Console.print(MESSAGE.result.benefit(roi));
  },
};

export default OutputView;
