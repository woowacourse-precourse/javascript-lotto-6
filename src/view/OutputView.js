import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';
import RESULT_MESSAGE from '../constants/StaticResult.js';

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

  printResult(winningStatic) {
    MissionUtils.Console.print(MESSAGES.resultHead);
    for (let i = 0; i < winningStatic.length; i++) {
      MissionUtils.Console.print(`${RESULT_MESSAGE[i]}${winningStatic[4 - i]}${MESSAGES.quantity}`);
    }
  },
};

export default OutputView;
