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
    await mathcedCount(
      winningMatchedResult[key],
      bonusMatchedResult[key],
      result
    );
  }

  const printedResults = {
    three: `3개 일치 (5,000원) - ${result.three}개`,
    four: `4개 일치 (50,000원) - ${result.four}개`,
    five: `5개 일치 (1,500,000원) - ${result.five}개`,
    fiveAndBonus: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.fiveAndBonus}개`,
    six: `6개 일치 (2,000,000,000원) - ${result.six}개`,
  };

  for (const [key, value] of Object.entries(printedResults)) {
    await MissionUtils.Console.print(value);
  }

  return printedResults;
}

export default winningResult;
