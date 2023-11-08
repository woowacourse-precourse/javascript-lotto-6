import { Console } from '@woowacourse/mission-utils';

import { PURCHASE_MESSAGE, STATISTICS_MESSAGE } from './constants/messages.js';
import { LOTTO_PRIZE } from './constants/lotto.js';

class Output {
  printPurchaseLottos(lottos) {
    Console.print(PURCHASE_MESSAGE(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  printStatistics(rankCountResult, returnRate) {
    Console.print(STATISTICS_MESSAGE.output);
    rankCountResult.forEach((count, idx) => {
      Console.print(STATISTICS_MESSAGE.result(idx, count, LOTTO_PRIZE[idx]));
    });
    Console.print(STATISTICS_MESSAGE.rateOfReturn(returnRate.toLocaleString()));
  }
}

export default Output;
