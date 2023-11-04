import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

const OutputView = {
  print: Console.print,

  printError: error => {
    Console.print(error);
    Console.print(`${error}`);
  },

  printLottosQuantity: quantity => {
    Console.print(OUTPUT_MESSAGES.lottosQuantity(quantity));
  },

  printLottos: lottos => lottos.forEach(Console.print),
};

export default OutputView;
