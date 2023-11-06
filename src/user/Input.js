import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/Constant.js';
import Validation from '../validation/Validation.js';

class Input {
  static async getPriceInput() {
    try {
      const inputString = await Console.readLineAsync(MESSAGE.PRICE_INPUT);
      const input = Number(inputString);
      Validation.isPriceNull(input);
      Validation.isPriceNotNumber(input);
      Validation.isPriceBadUnit(input);
      return input;
    } catch(e) {
      Console.print(e);
    }
  }
};

export default Input;