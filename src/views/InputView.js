import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/Message.js';

class InputView {
  // constructor() {}

  async purchaseAmount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.amount);
    return input;
  }
}

export default InputView;
