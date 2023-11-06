import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE_FUNCTION } from '../constants/Messages.js';

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
      this.print(userLotto);
    });
  },
};

export default OutputView;
