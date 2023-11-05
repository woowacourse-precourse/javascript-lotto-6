import { Console } from '@woowacourse/mission-utils';
import Price from './Price.js';
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './constants.js';

class App {
  async getUserPrice() {
    const priceInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_PRICE
    );
    if (!Price.isValidPrice(priceInput)) {
      throw new Error(
        isNaN(priceInput)
          ? ERROR_MESSAGE.FORMAT_ERROR
          : ERROR_MESSAGE.PRICE_UNIT_ERROR
      );
    }
    const price = Number(priceInput);
    return price;
  }

  async play() {
    const userPriceInput = await this.getUserPrice();
    const lottoAmount = Price.calculateLottoAmount(userPriceInput);
    console.log(lottoAmount);
  }
}

export default App;
