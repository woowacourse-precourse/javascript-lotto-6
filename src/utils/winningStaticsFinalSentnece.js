import { MissionUtils } from "@woowacourse/mission-utils";

async function winningStatisticsFinalSentence(rate) {
  MissionUtils.Console.print(`총 수익률은 ${rate}%입니다`);
}

export default winningStatisticsFinalSentence;
