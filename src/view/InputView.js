import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

const InputView = {
  async readAmount() {
    const amount = Console.readLineAsync(MESSAGES.inputAmount);
    return amount;
  },

  async readLottoNumber() {
    const userLottoNumber = Console.readLineAsync(MESSAGES.askLottoNumber);
    return userLottoNumber;
  },
};

export default InputView;
