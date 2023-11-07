import { MissionUtils } from '@woowacourse/mission-utils';
import COMMON from '../constants/common.js';
import WINNING_INFO from '../constants/winningInfo.js';
import MESSAGE from '../constants/message.js';
import { formatMoney } from '../utils/function.js';

class OutputView {
  static printLineBreak() {
    MissionUtils.Console.print(COMMON.empty);
  }

  static printNumberOfLottos(numberOfLottos) {
    MissionUtils.Console.print(`${numberOfLottos}${MESSAGE.output.purchased}`);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.numbers.join(', ')}]`);
    });
  }

  static printWinningResult(cntRank) {
    MissionUtils.Console.print(MESSAGE.output.winningResult);
    Object.entries(WINNING_INFO)
      .reverse()
      .forEach(([key, info]) => {
        const cnt = cntRank[key];
        const { criteria, prizeMoney } = info;
        const formattedPrizeMoney = formatMoney(prizeMoney);
        MissionUtils.Console.print(
          `${criteria} (${formattedPrizeMoney}원) - ${cnt}개`,
        );
      });
  }

  static printEarningRate(earningRate) {
    MissionUtils.Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default OutputView;
