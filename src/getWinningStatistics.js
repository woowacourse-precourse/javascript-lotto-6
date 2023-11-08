import { MissionUtils } from "@woowacourse/mission-utils";

function getWinningStatistics(WinningStatistics) {
    const { three, four, five, fiveBonus, six } = WinningStatistics;
    MissionUtils.Console.print(`당첨 통계
---
3개 일치 (5,000원) - ${three}개
4개 일치 (50,000원) - ${four}개
5개 일치 (1,500,000원) - ${five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveBonus}개
6개 일치 (2,000,000,000원) - ${six}개`);
}

export default getWinningStatistics;
