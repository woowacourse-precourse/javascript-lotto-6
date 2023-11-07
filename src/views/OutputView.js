import { Console } from '@woowacourse/mission-utils';
import { PRIZE_KEY } from '../constants/constants.js';
import { OUTPUT_MESSAGE, STATISTIC_LABEL } from '../constants/messages.js';

class OutputView {
  printError(message) {
    Console.print(message);
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

    Object.entries(winsStatistics).forEach(([prizeKey, count]) => {
      const label = STATISTIC_LABEL[prizeKey];

      Console.print(`${label} - ${count}개`);
    });
  }

  printProfitRatio(profitRatio) {
    Console.print(OUTPUT_MESSAGE.totalProfitRatio(profitRatio));
  }
}

export default OutputView;
