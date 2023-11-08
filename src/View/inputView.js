import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, NUMBERS } from '../Constants/Constants.js';
import VALIDATION from '../Controller/Validation.js';
import OUTPUT_VIEW from './outputView.js';
import Lotto from '../Lotto.js';

const INPUT_VIEW = {
  async inputPrice() {
    let VAL = false;
    let PRICE = 0;
    while (!VAL) {
      const input = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_PRICE);
      try {
        VALIDATION.priceValidation(input);
        PRICE = input;
        VAL = true;
      } catch (error) {
        Console.print(error);
      }
    }
    const LOTTO_COUNT = PRICE / NUMBERS.LOTTO_PRICE;
    OUTPUT_VIEW.outputLottoCount(LOTTO_COUNT);
    return LOTTO_COUNT;
  },

  async inputLotto() {
    let VAL = false;
    let WINNING_LOTTO = null;
    // 6개짜리 배열 저장
    while (!VAL) {
      try {
        const LOTTO_NUM = await Console.readLineAsync(
          LOTTO_MESSAGE.INPUT_NUMBERS,
        );
        const LOTTO_SPLIT = LOTTO_NUM.split(',').map((element) =>
          Number(element),
        );
        WINNING_LOTTO = new Lotto(LOTTO_SPLIT);
        VAL = true;
      } catch (error) {
        Console.print(error);
      }
    }
    return WINNING_LOTTO.getNumbers();
  },

  async inputBonus(numbers) {
    let VAL = false;
    let BONUS_NUM = 0;
    while (!VAL) {
      const input = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_BONUS);

      try {
        VALIDATION.bonusValidation(numbers, input);
        BONUS_NUM = input;
        VAL = true;
      } catch (error) {
        Console.print(error);
      }
    }
    return Number(BONUS_NUM);
  },
};

export default INPUT_VIEW;
