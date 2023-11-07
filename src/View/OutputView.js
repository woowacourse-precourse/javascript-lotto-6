import { Console } from '@woowacourse/mission-utils';
import COMMON from '../constants/common.js';
import { WINNING_INFO } from '../constants/winningInfo.js';
import MESSAGE from '../constants/message.js';
import { formatMoney } from '../utils/function.js';

class OutputView {
  static printLineBreak() {
    Console.print(COMMON.empty);
  }

  static printNumberOfLottos(numberOfLottos) {
    Console.print(`${numberOfLottos}${MESSAGE.output.purchased}`);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.numbers);
    });
  }

  static printWinningResult(cntRank) {
    Console.print(MESSAGE.output.winningResult);
    Object.entries(WINNING_INFO).forEach(([key, info]) => {
      const cnt = cntRank[key];
      const { criteria, prizeMoney } = info;
      const formattedPrizeMoney = formatMoney(prizeMoney);
      Console.print(`${criteria} (${formattedPrizeMoney}원) - ${cnt}개`);
    });
  }

  static printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default OutputView;
