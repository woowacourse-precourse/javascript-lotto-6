import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const inputs = {
  async buyLotto() {
    const priceAnswer = await Console.readLineAsync(
      MESSAGE.input.purchasePrice,
    );
    return priceAnswer;
  },
};

export default inputs;
