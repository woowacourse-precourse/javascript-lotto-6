import { Console } from '@woowacourse/mission-utils';

import { OUTPUT } from '../constants/message/io.js';
import { MATCH_COUNT, PRIZE, RANK } from '../constants/statistics.js';

class OutputView {
  static printErrorMessage(error) {
    Console.print(`${error}\n`);
  }

  static printPurchaseMessage(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  static printLottos(lottos) {
    lottos.forEach(lotto => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(', ')}]`);
    });
  }

  static printStatisticsHeader() {
    Console.print(OUTPUT.statistics);
  }

  static printStatistics(statistics) {
    statistics.forEach(([rank, count]) => {
      const matchCount = MATCH_COUNT[rank];
      const prize = PRIZE[rank].toLocaleString();
      const bonus = OUTPUT.bonus[rank === RANK.second];

      Console.print(`${matchCount}개 일치${bonus} (${prize}원) - ${count}개`);
    });
  }

  static printRevenueRate(revenueRate) {
    Console.print(`총 수익률은 ${revenueRate}%입니다.`);
  }
}

export default OutputView;
