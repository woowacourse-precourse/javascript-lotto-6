import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Message.js';

class OutputView {
  printLottos(count, lottos) {
    Console.print(OUTPUT_MESSAGE.purchase(count));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  printStats(lottoStats) {
    Console.print(OUTPUT_MESSAGE.result);
    Console.print('---');
    Console.print(OUTPUT_MESSAGE.stats(lottoStats));
  }

  printProfit(profitRate) {
    Console.print(OUTPUT_MESSAGE.profit(profitRate));
  }

  printError(message) {
    Console.print(message);
  }
}

export default OutputView;
