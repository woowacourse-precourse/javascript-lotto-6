import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constant/index.js';

class OutputView {
  static print(message) {
    Console.print(message);
  }

  static printNewLine() {
    Console.print(OUTPUT.NEW_LINE);
  }
}

export default OutputView;
