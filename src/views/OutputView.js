import { Console } from '@woowacourse/mission-utils';
import { PRIZE_KEY } from '../constants/constants.js';
import { OUTPUT_MESSAGE, STATISTIC_LABEL } from '../constants/messages.js';

class OutputView {
  printErrorMessage(error) {
    Console.print(error);
  }

  printPurchaseAmount(amount) {
    Console.print(OUTPUT_MESSAGE.purchaseAmount(amount));
  }

  printPurchasedLotto(purchasedLotto) {
    const lottos = purchasedLotto.map((lotto) => `[${lotto.join(', ')}]`).join('\n');
    Console.print(`${lottos}\n`);
  }

  printWinsStatistics(winsStatistics) {
    Console.print(OUTPUT_MESSAGE.winsStatistic);

    for (const prizeKey in winsStatistics) {
      const label = STATISTIC_LABEL[prizeKey];

      Console.print(`${label} - ${winsStatistics[prizeKey]}개`);
    }
  }

  printProfitRatio(profitRatio) {
    Console.print(OUTPUT_MESSAGE.totalProfitRatio(profitRatio));
  }
}

export default OutputView;
