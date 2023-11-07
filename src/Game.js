import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant/Constant.js';
import Validation from './validation/Validation.js';

class Game {
  #pricePaid;
  #boughtLottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#pricePaid = this.#setPrice();
  }

  async #setPrice() {
    while (true) {
      try {
        const inputString = await Console.readLineAsync(MESSAGE.PRICE_INPUT);
        const input = Number(inputString);
        this.#validatePrice(input);
        return input;
      } catch(e) {
        Console.print(e);
      }
    }
  }

  #validatePrice(price) {
    Validation.isPriceNull(input);
    Validation.isPriceNotNumber(input);
    Validation.isPriceBadUnit(input);
  }
};

export default Game;