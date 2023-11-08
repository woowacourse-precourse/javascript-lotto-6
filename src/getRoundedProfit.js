import { MissionUtils } from "@woowacourse/mission-utils";

function getRoundedProfit(WinningStatistics, purchaseAmount) {
    const { three, four, five, fiveBonus, six } = WinningStatistics;
    const total = 5000 * three + 50000 * four + 1500000 * five + 30000000 * fiveBonus + 2000000000 * six;
    const roundedProfit = Math.round((total / purchaseAmount) * 100 * 10) / 10;
    MissionUtils.Console.print(`총 수익률은 ${roundedProfit}%입니다.`);
}

export default getRoundedProfit;
