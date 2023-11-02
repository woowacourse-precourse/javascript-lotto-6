import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';

const PURCHASE_PRICE_INPUT_MESSAGE = '구입금액을 입력해 주세요.';
class ConvertInputTo {
  static async purchasePrice() {
    const inputString = await Console.readLineAsync(
      PURCHASE_PRICE_INPUT_MESSAGE
    );

    ErrorCheck.purchasePrice(inputString);
    return Number(inputString);
  }
}

export default ConvertInputTo;
