import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';

const LOTTO_PRICE = 1000;

const PURCHASE_PRICE_INPUT_MESSAGE = '구입금액을 입력해 주세요.';
class ConvertInputTo {
  static async purchasePrice() {
    const inputString = await Console.readLineAsync(
      PURCHASE_PRICE_INPUT_MESSAGE
    );

    ErrorCheck.purchasePrice(inputString, LOTTO_PRICE);
    return Number(inputString);
  }
}

export default ConvertInputTo;
