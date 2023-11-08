import { MissionUtils } from "@woowacourse/mission-utils";
import calcReturn from "./calcReturn.js";

function printResult(resultArray, input) {
  const rate = calcReturn(input, resultArray);
  MissionUtils.Console.print("당첨 통계");
  MissionUtils.Console.print("---");
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${resultArray[0]}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${resultArray[1]}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${resultArray[2]}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultArray[3]}개`
  );
  MissionUtils.Console.print(
    `6개 일치 (2,000,000,000원) - ${resultArray[4]}개`
  );
  MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
}

export default printResult;
