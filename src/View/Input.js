import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const Input = {
  async buyLotto() {
    const priceAnswer = await Console.readLineAsync(
      MESSAGE.input.purchasePrice,
    );
    return priceAnswer;
  },
};

export default Input;
