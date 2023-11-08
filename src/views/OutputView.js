import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/OutputMessage.js';

class OutputView {
  static outputLottoPurchaseAmount(amount) {
    Console.print(`${amount}${OUTPUT_MESSAGE.boughtNumber}`);
  }
  static outputMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
