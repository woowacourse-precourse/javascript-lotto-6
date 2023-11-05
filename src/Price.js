import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './constants.js';

class Price {
  constructor() {}

  static isValidPrice(price) {
    return !isNaN(price) && price % 1000 === 0;
  }

  static async getUserPrice() {
    const priceInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_PRICE
    );
    if (!this.isValidPrice(priceInput)) {
      throw new Error(
        isNaN(priceInput)
          ? ERROR_MESSAGE.FORMAT_ERROR
          : ERROR_MESSAGE.PRICE_UNIT_ERROR
      );
    }
    const price = Number(priceInput);
    return price;
  }
}

export default Price;
