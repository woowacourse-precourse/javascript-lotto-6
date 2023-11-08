import { Console } from "@woowacourse/mission-utils";

export function printResult(resultList, budget) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print("3개 일치 (5,000원) - " + resultList[0] + "개");
    Console.print("4개 일치 (50,000원) - " + resultList[1] + "개");
    Console.print("5개 일치 (1,500,000원) - " + resultList[2] + "개");
    Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + resultList[3] + "개");
    Console.print("6개 일치 (2,000,000,000원) - " + resultList[4] + "개");

    const profit = 5000 * resultList[0] + 50000 * resultList[1] + 1500000 * resultList[2] + 30000000 * resultList[3] + 2000000000 * resultList[4];
    const profitRate = Math.round((profit / budget * 100) * 100) / 100;
    Console.print("총 수익률은 " + profitRate + "%입니다.");
}