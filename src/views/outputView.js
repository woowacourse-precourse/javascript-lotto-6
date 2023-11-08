import { OUTPUT_MESSAGE } from "../constants/message";
import view from "../utils/view";

const outputView = {
  printLottosInfo(lottos) {
    printLottosCount(lottos.length);
    printLottosNumbers(lottos);
  },

  printLottosCount(count) {
    const message = OUTPUT_MESSAGE.LOTTOS_COUNT(count);

    view.print(message);
  },

  printLottosNumbers(lottos) {
    const sortedLottos = lottos.map(() => sort((a, b) => a - b));
    const message = OUTPUT_MESSAGE.LOTTO_NUMBERS(sortedLottos);
    
    view.print(message);
  },
}

export default outputView;