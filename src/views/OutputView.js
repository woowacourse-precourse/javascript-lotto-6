import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

const OutputView = {
  printPublishCount(count) {
    Console.print(OUTPUT_MESSAGE.publishCount(count));
  },

  printLine() {
    Console.print('');
  },

  printLottos(lottos) {
    lottos.forEach(lotto => {
      Console.print(OUTPUT_MESSAGE.lotto(lotto.numbers));
    });
  },
};

export default OutputView;
