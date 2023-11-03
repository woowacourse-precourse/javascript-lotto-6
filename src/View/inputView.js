import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE } from '../Constants/Constants.js';

const INPUT_VIEW = {
  async inputPrice() {
    const PRICE = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_PRICE);
    return PRICE;
  },

  async inputLotto() {
    const LOTTO_NUM = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_NUMBERS);
    return LOTTO_NUM;
  },

  async inputBonus() {
    const BONUS_NUM = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_BONUS);
    return BONUS_NUM;
  },
};

export default INPUT_VIEW;
