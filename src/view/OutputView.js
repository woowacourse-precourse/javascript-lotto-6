import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES, OUTPUT_MESSAGES } from '../constants/messages.js';

const OutputView = {
  print: Console.print,

  printError: errorMessage => {
    Console.print(`${ERROR_MESSAGES.prefix} ${errorMessage}`);
  },

  printLottosQuantity: quantity => {
    Console.print(OUTPUT_MESSAGES.lottosQuantity(quantity));
  },

  printLottos: lottos => lottos.forEach(Console.print),
};

export default OutputView;
