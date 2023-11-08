import { MissionUtils } from '@woowacourse/mission-utils';
import STATIC_RESULT from '../constants/StaticResult.js';
import MESSAGES from '../constants/messages.js';

const OutputView = {
  printPurchaseAmount(amount) {
    MissionUtils.Console.print(`\n${amount}${MESSAGES.purchaseAmount}`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      MissionUtils.Console.print(`[${lottos[i].join(', ')}]`);
    }
  },

  printRevenueResult(revenue) {
    MissionUtils.Console.print(`${MESSAGES.revenueFront} ${revenue}${MESSAGES.revenueBack}`);
  },

  printResultStatistic(winningStatic) {
    MissionUtils.Console.print(MESSAGES.resultHead);
    for (let i = 0; i < winningStatic.length; i++) {
      MissionUtils.Console.print(`${STATIC_RESULT[i]}${winningStatic[4 - i]}${MESSAGES.quantity}`);
    }
  },
};

export default OutputView;
