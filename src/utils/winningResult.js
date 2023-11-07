import { MissionUtils } from "@woowacourse/mission-utils";
import winningStatisticsSentence from "./winningStatisticsSentence.js";
import mathcedCount from "./matchedCount.js";

async function winningResult(winningMatchedResult, bonusMatchedResult) {
  let result = {
    three: 0,
    four: 0,
    five: 0,
    fiveAndBonus: 0,
    six: 0,
  };

  winningStatisticsSentence();
  for (const key in winningMatchedResult) {
    mathcedCount(winningMatchedResult[key], bonusMatchedResult[key], result);
  }
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${result.three}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${result.four}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result.five}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.fiveAndBonus}개`
  );
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result.six}개`);
}

export default winningResult;
