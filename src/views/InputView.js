import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

const InputView = {
  getLottoPrice() {
    return Console.readLineAsync(`${Messages.LOTTO_PRICE_INPUT}\n`);
  },
}

export default InputView;