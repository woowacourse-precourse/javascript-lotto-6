import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, OUTPUT_MESSAGE_FUNCTION } from '../constants/Messages.js';

const OutputView = {
  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  },

  /**
   * @param {number[]} userLottos
   */
  printLottos(userLottos) {
    this.print(OUTPUT_MESSAGE_FUNCTION.userLottos(userLottos));
    userLottos.forEach((userLotto) => {
      this.print(`[${userLotto.join(', ')}]`);
    });
  },

  printStatistics({ ranks, rateOfReturn }) {
    this.print(OUTPUT_MESSAGE.statisticsMessage);
    OUTPUT_MESSAGE.statistics.forEach((message, index) =>
      this.print(`${message}${ranks.get(`${5 - index}등`) ?? 0}개`),
    );
    this.print(OUTPUT_MESSAGE_FUNCTION.statistics(rateOfReturn));
  },
};

export default OutputView;
