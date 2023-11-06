import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, NUMBERS } from '../Constants/Constants.js';
import VALIDATION from '../Controller/Validation.js';
import OUTPUT_VIEW from './outputView.js';
import Lotto from '../Lotto.js';

const INPUT_VIEW = {
  async inputPrice() {
    const PRICE = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_PRICE);
    await VALIDATION.priceValidation(PRICE);
    const LOTTO_COUNT = PRICE / NUMBERS.LOTTO_PRICE;
    OUTPUT_VIEW.outputLottoCount(LOTTO_COUNT);
    return LOTTO_COUNT;
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
