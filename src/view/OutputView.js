import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';
import SYMBOLS from '../constants/symbols.js';

const print = any => {
  Console.print(any);
};

const OutputView = {
  printError(error) {
    print(error);
    print(`${error}`);
  },

  printLottoQuantity(quantity) {
    print(OUTPUT_MESSAGES.lottosQuantity(quantity));
  },

  printLottoNumbers(lottos) {
    lottos.forEach(lotto => print(`[${lotto.join(`${SYMBOLS.comma} `)}]`));
  },

  printResult() {
    print(OUTPUT_MESSAGES.result + OUTPUT_MESSAGES.divisionLine);
  },

  printStats(stats) {
    stats.forEach((stat, index) => print(OUTPUT_MESSAGES.hits(stat, index)));
  },

  printProfitRate(profitRate) {
    print(OUTPUT_MESSAGES.profitRate(profitRate));
  },
};

export default OutputView;
