import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';

const LOTTO_PRICE = 1000;
const LOTTO_UPPER_NUMBER = 45;

const PURCHASE_PRICE_INPUT_MESSAGE = '구입금액을 입력해 주세요.';
const WINNING_NUMBER_INPUT_MESSAGE = '당첨 번호를 입력해 주세요.';

const MISS_STATE = 0;
const BONUS_STATE = 0.5;
const HIT_STATE = 1;

class ConvertInputTo {
  static async lottoArray() {
    return await ConvertInputTo.purchasePrice().then(purchasePrice =>
      Get.randomLottoArray(purchasePrice / LOTTO_PRICE)
    );
  }

  static async purchasePrice() {
    const inputString = await Console.readLineAsync(
      PURCHASE_PRICE_INPUT_MESSAGE
    );

    ErrorCheck.purchasePrice(inputString, LOTTO_PRICE);
    return Number(inputString);
  }

  static async numberBoard() {
    const board = new Array(LOTTO_UPPER_NUMBER + 1).fill(MISS_STATE);
    const inputString = await Console.readLineAsync(
      WINNING_NUMBER_INPUT_MESSAGE
    );
  }
}

export default ConvertInputTo;
