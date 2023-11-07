import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

const OutputView = {
  printError(error) {
    Console.print(error);
    Console.print(`${error}`);
  },

  printLottosQuantity(quantity) {
    Console.print(OUTPUT_MESSAGES.lottosQuantity(quantity));
  },

  printLottos(lottos) {
    lottos.forEach(lotto => Console.print(lotto));
  },

  printResult() {
    Console.print(OUTPUT_MESSAGES.result + OUTPUT_MESSAGES.divisionLine);
  },

  printStats(stats) {
    stats.forEach((stat, index) =>
      Console.print(OUTPUT_MESSAGES.hits(stat, index)),
    );
  },

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGES.profitRate(profitRate));
  },
};

export default OutputView;
