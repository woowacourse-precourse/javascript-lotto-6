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
    Console.print(`${numberOfLottos}개 구매했습니다.`);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.numbers);
    });
  }

  static printWinningResult(cntRank) {
    Console.print(MESSAGE.output.winningResult);
    OutputView.#printWinningResultAsTable(cntRank);
  }

  static #printWinningResultAsTable(cntRank) {
    OutputView.#printDivider();
    Console.print(MESSAGE.output.winningTableHeader);
    OutputView.#printDivider();

    Object.entries(WINNING_INFO).forEach(([key, info]) => {
      const { rank, criteria, prizeMoney } = info;
      const cnt = cntRank[key];
      const formattedPrizeMoney = formatMoney(prizeMoney);
      Console.print(
        `${rank}등\t${cnt}개 당첨\t${criteria} (${formattedPrizeMoney}원)`,
      );
    });
    OutputView.#printDivider();
  }

  static #printDivider() {
    Console.print(MESSAGE.output.divider);
  }

  static printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default OutputView;
