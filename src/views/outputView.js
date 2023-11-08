import { OUTPUT_MESSAGE } from '../constants/message';
import view from '../utils/view';

const outputView = {
  printLottosInfo(lottos) {
    this.printLottosCount(lottos.length);
    this.printLottosNumbers(lottos);
  },

  printLottosCount(count) {
    const message = OUTPUT_MESSAGE.LOTTOS_COUNT(count);

    view.print(message);
  },

  printLottosNumbers(lottos) {
    const sortedLottos = lottos.map((arr) => arr.sort((a, b) => a - b));

    for(const numbers of sortedLottos) {
      const message = OUTPUT_MESSAGE.LOTTO_NUMBERS(numbers);
      view.print(message);
    };
  },

  printTotalResult(totalResult, totalPrice) {
    const message = OUTPUT_MESSAGE.TOTAL_RESULT(totalResult, totalPrice);
  }
}

export default outputView;
