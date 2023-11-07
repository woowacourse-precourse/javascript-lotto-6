import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Message.js';

class OutputView {
  printLottos(count, lottos) {
    Console.print(OUTPUT_MESSAGE.purchase(count));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  printError(message) {
    Console.print(message);
  }
}

export default OutputView;
