import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, GAME, RESULT_KEY } from "../constant/GameConfig.js";

class OutputView {
  printPurchaseAmout(lottos) {
    MissionUtils.Console.print(MESSAGE.output.amount(lottos.length));
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.toPrintableString());
    });
  }

  printResults(results, roi) {
    MissionUtils.Console.print(MESSAGE.output.statistics);

    for (const key of RESULT_KEY) {
      const count = results[key] || 0;
      const prize = GAME.prize[key];
      MissionUtils.Console.print(
        `${GAME.resultMessages[key]} (${prize.toLocaleString()}원) - ${count}개`,
      );
    }
    MissionUtils.Console.print(MESSAGE.output.roi(roi));
  }
}

export default OutputView;
