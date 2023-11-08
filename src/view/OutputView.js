import { MissionUtils } from '@woowacourse/mission-utils';
import STATIC_RESULT from '../constants/StaticResult.js';

const OutputView = {
  printPurchaseAmount(amount) {
    MissionUtils.Console.print(`\n${amount}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      MissionUtils.Console.print(`[${lottos[i].join(', ')}]`);
    }
  },

  printRevenueResult(revenue) {
    MissionUtils.Console.print(`총 수익률은 ${revenue}%입니다.\n`);
  },

  printResultStatistic(winningStatic) {
    MissionUtils.Console.print('\n당첨통계\n---');
    for (let i = 0; i < winningStatic.length; i++) {
      MissionUtils.Console.print(`${STATIC_RESULT[i]}${winningStatic[4 - i]}개`);
    }
  },
};

export default OutputView;
