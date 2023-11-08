import { MissionUtils } from "@woowacourse/mission-utils";
import { RANK_1, RANK_2, RANK_3, RANK_4, RANK_5 } from "./constants.js";

class WinningResultView {
  static toRateOfReturn({ prize, purchasePrice }) {
    const rate = prize / purchasePrice * 100;

    return rate.toFixed(1);
  }

  static printWinningStatistics({ ranks, prize, purchasePrice }) {
    const rateOfReturn = WinningResultView.toRateOfReturn({ prize, purchasePrice });

    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${ranks[RANK_5]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${ranks[RANK_4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${ranks[RANK_3]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranks[RANK_2]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${ranks[RANK_1]}개`);
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default WinningResultView;
