import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, RESULT } from '../constants/messages.js';

const OutputView = {
  pritnError(message) {
    Console.print(message);
  },

  printQuentity(quentity) {
    Console.print(MESSAGES.printQuentity(quentity));
  },

  printLottoWinningNumbers(numbers) {
    Console.print(RESULT.printWinningNumbers(numbers));
  },

  printLottoResult(result) {
    Console.print(RESULT.printLottoResult(...result));
  },
};

export default OutputView;
