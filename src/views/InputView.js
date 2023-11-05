import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

const InputView = {
  inputPrices() {
    return Console.readLineAsync(INPUT_MESSAGE.price);
  },

  inputWinningNumbers() {
    return Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
  },

  inputBounusNumber() {
    return Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  },
};

export default InputView;
