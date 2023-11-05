import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottos(lottos) {
    Console.print(OUTPUT_MESSAGE.PURCASE_QUANTITY(lottos.length));
    lottos.forEach((lotto) => {
      Console.print('[' + lotto.getNumbers().join(', ') + ']');
    });
  },
};

export default OutputView;
