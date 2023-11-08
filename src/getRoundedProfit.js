import { MissionUtils } from "@woowacourse/mission-utils";

function getRoundedProfit(WinningStatistics, purchaseAmount) {
    const total = 5000 * WinningStatistics.three + 50000 * WinningStatistics.four
        + 1500000 * WinningStatistics.five + 30000000 * WinningStatistics.fiveBonus + 2000000000 * WinningStatistics.six;
    const profit = total / purchaseAmount * 100;
    const roundedProfit = Math.round(profit * 10) / 10;
    MissionUtils.Console.print("총 수익률은 " + roundedProfit + "%입니다.");
}

export default getRoundedProfit;
