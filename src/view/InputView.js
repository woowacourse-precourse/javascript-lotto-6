import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Constant.js';

const InputView = {
  async inputAmount() {
    const amount = await Console.readLineAsync(MESSAGE.enterAmount);
    return amount;
  },
};

export default InputView;
