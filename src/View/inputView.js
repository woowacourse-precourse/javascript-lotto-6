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
    const LOTTO_SPLIT = LOTTO_NUM.split(',').map((element) => Number(element)); // 6개짜리 배열 저장
    return LOTTO_SPLIT;
  },

  async inputBonus() {
    const BONUS_NUM = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_BONUS);
    return Number(BONUS_NUM);
  },
};

export default INPUT_VIEW;
