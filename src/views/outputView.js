import { OUTPUT_MESSAGE } from '../constants/message';
import view from '../utils/view';

const outputView = {
  printLottosInfo(lottos) {
    const messages = [];
    messages.push(this.printLottosCount(lottos.length));
    messages.push(this.printLottosNumbers(lottos));

    view.print(messages.join("\n"));
  },

  printLottosCount(count) {
    const message = OUTPUT_MESSAGE.LOTTOS_COUNT(count);

    return message
  },

  printLottosNumbers(lottos) {
    const sortedLottos = lottos.map((arr) => arr.sort((a, b) => a - b));
    const messages = [];

    for(const numbers of sortedLottos) {
      messages.push(OUTPUT_MESSAGE.LOTTO_NUMBERS(numbers));
    };
    return messages.join("\n");
  },

  printTotalResult(totalResult, totalPrice) {
    const message = OUTPUT_MESSAGE.TOTAL_RESULT(totalResult, totalPrice);

    view.print(message);
  },

  printError(message) {
    view.print(message);
  },
}

export default outputView;
