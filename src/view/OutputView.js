import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

const OutputView = {
  printLottosCount(ticketCount) {
    Console.print(MESSAGE.OUTPUT_LOTTO_COUNT(ticketCount));
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().toString().split(',').join(', ');
      Console.print(MESSAGE.OUTPUT_LOTTOS(numbers));
    });
  },

  printStatus(result) {
    Console.print(MESSAGE.OUTPUT_STATUS);
    Console.print(MESSAGE.OUTPUT_RESULT(result));
  },

  printEarningRate(earningRate) {
    Console.print(MESSAGE.OUTPUT_EARNING_RATE(earningRate));
  },
};

export default OutputView;
