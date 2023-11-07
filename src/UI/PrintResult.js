import { MissionUtils } from "@woowacourse/mission-utils";
class PrintResult {
  print(rankMatchArray) {
    MissionUtils.Console.print("당첨 통계\n");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rankMatchArray[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rankMatchArray[1]}개`);
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${rankMatchArray[2]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankMatchArray[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${rankMatchArray[4]}개`
    );
  }
}

export default PrintResult;
