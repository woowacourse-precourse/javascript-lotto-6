import { MissionUtils } from "@woowacourse/mission-utils";

export default class OutputHandler {
    static numberOfLottoPurchase(lottos) {
        MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
        lottos.forEach(lotto => {
            MissionUtils.Console.print(`[${lotto.numbers.join(', ')}]`);
        });
        MissionUtils.Console.print("");
    }

    static winningStatistics(statistics) {
        const statisticsMessage = [
            "당첨 통계",
            "---",
            `3개 일치 (5,000원) - ${statistics.three}개`,
            `4개 일치 (50,000원) - ${statistics.four}개`,
            `5개 일치 (1,500,000원) - ${statistics.five}개`,
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics.fiveWithBonus}개`,
            `6개 일치 (2,000,000,000원) - ${statistics.six}개`,
        ].join('\n');
        MissionUtils.Console.print("");
        MissionUtils.Console.print(statisticsMessage);
    }

    static totalProfitRate(profitRate) {
        MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }
}
