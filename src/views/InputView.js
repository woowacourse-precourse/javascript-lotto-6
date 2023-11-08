import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/InputMessage.js';

class InputView {
  static async inputPrice() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.price);
    return input;
  }
}

export default InputView;
