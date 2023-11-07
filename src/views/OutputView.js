import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

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

    const prizeLevels = [
      { label: '3개 일치 (5,000원)', prizeKey: 'fifthPrize' },
      { label: '4개 일치 (50,000원)', prizeKey: 'fourthPrize' },
      { label: '5개 일치 (1,500,000원)', prizeKey: 'thirdPrize' },
      { label: '5개 일치, 보너스 볼 일치 (30,000,000원)', prizeKey: 'secondPrize' },
      { label: '6개 일치 (2,000,000,000원)', prizeKey: 'firstPrize' },
    ];

    prizeLevels.forEach((level) => {
      Console.print(`${level.label} - ${winsStatistics[level.prizeKey]}개`);
    });
  }

  printProfitRatio(profitRatio) {
    Console.print(OUTPUT_MESSAGE.totalProfitRatio(profitRatio));
  }
}

export default OutputView;
