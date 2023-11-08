import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

class InputView {
  static getLottoPrice() {
    return Console.readLineAsync(MESSAGES.LOTTO_PRICE_INPUT);
  }
}

export default InputView;