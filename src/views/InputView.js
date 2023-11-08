import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const InputView = {
  getLottoPrice() {
    return Console.readLineAsync(`${MESSAGES.LOTTO_PRICE_INPUT}\n`);
  },
}

export default InputView;