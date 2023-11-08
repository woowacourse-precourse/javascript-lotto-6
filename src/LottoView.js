import {MissionUtils} from "@woowacourse/mission-utils";

class LottoView {
    displayLottoNumbers(lottos) {
        MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
        lottos.forEach((lotto) => lotto.displayNumbers());
        MissionUtils.Console.print("");
    }

    displayResults(results) {
        MissionUtils.Console.print("당첨 통계\n---");
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[5.1]}개`);
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
    }

    displayTotalEarningsRate(totalEarningsRate) {
        MissionUtils.Console.print(`총 수익률은 ${totalEarningsRate.toFixed(1)}%입니다.`);
    }
}

export default LottoView;