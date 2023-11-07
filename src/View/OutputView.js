import { Console } from '@woowacourse/mission-utils';
import COMMON from '../constants/common.js';
import WINNING_INFO from '../constants/winningInfo.js';

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

  static printMatchingResult(cntRank) {
    Console.print('당첨 통계:');
    Object.keys(WINNING_INFO).forEach((key) => {
      Console.print(
        `${WINNING_INFO[key].criteria} (${WINNING_INFO[key].prizeMoney}) - ${cntRank[key]}개`,
      );
    });
  }

  static printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default OutputView;
