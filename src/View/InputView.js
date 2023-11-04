import { Console } from '@woowacourse/mission-utils';
import { ERROR, INPUT } from '../constant/index';

class InputView {
  static async readBuyingPrice() {
    const input = await Console.readLineAsync(INPUT.BUYING_PRICE);
    InputView.#validateBuyingPrice(input);
    return Number(input);
  }

  static #validateBuyingPrice(input) {
    if (!/^[1-9][0-9]*$/.test(input)) {
      throw new Error(ERROR.NUMBERS_GREATER_THAN_ZERO);
    }

    if (Number(input) % 1000 !== 0) {
      throw new Error(ERROR.BUYING_PRICE_UNIT);
    }
  }
}

export default InputView;
