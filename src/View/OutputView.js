import { Console } from '@woowacourse/mission-utils';
import COMMON from '../constants/common.js';
import { WINNING_INFO } from '../constants/winningInfo.js';
import MESSAGE from '../constants/message.js';

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

    Object.keys(WINNING_INFO).forEach((key) => {
      const { rank, criteria, prizeMoney } = WINNING_INFO[key];
      const prizeMoneyWithComma = prizeMoney.toLocaleString('ko-kr');
      const cnt = cntRank[key];
      Console.print(
        `${rank}등\t${cnt}개 당첨\t${criteria} (${prizeMoneyWithComma}원)`,
      );
    });
    OutputView.#printDivider();
  }

  static #printDivider() {
    Console.print(COMMON.dash.repeat(50));
  }

  static printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default OutputView;
