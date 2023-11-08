import { MissionUtils } from "@woowacourse/mission-utils";

function getWinningStatistics(WinningStatistics) {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print("3개 일치 (5,000원) - " + WinningStatistics.three + "개");
    MissionUtils.Console.print("4개 일치 (50,000원) - " + WinningStatistics.four + "개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - " + WinningStatistics.five + "개");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + WinningStatistics.fiveBonus + "개");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - " + WinningStatistics.six + "개");   
}

export default getWinningStatistics;
