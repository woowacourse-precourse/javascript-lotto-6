import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

const InputView = {
  readLottoAmount() {
    return Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
  },
};

export default InputView;
