import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const inputs = {
  async enterPrice() {
    const priceAnswer = await Console.readLineAsync(MESSAGE.input.price);
    return priceAnswer;
  },

  async enterLotto() {
    const lottoAnswer = await Console.readLineAsync(MESSAGE.input.lotto);
    return lottoAnswer;
  },

  async enterBonusNumber() {
    const numberAnswer = await Console.readLineAsync(MESSAGE.input.bonusNumber);
    return numberAnswer;
  },
};

export default inputs;
