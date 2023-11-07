import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE, UNIT, NEW_LINE, RANGE_START, RANGE_END, BALL_NUMBERS, SPLIT_SEPARATOR } from './constant/Constant.js';
import Validation from './validation/Validation.js';
import Lotto from './Lotto.js';

class Game {
  #pricePaid;
  #boughtLottos;
  #winningNumbers;
  #bonusNumber;

  async play() {
    this.#pricePaid = await this.#setPrice();
    this.#setLottos();
    this.printLottos();
  }

  async #setPrice() {
    while (true) {
      try {
        const input = await Console.readLineAsync(MESSAGE.PRICE_INPUT);
        const price = Number(input);
        this.#validatePrice(price);
        return price;
      } catch(e) {
        Console.print(e);
      }
    }
  }

  #setLottos() {
    this.#boughtLottos = [];
    Array.from({ length: this.#pricePaid/UNIT }).forEach(() => {
      this.#boughtLottos.push(this.#generateRandomLotto());
    });
  }

  printLottos() {
    Console.print(`${NEW_LINE}${this.#boughtLottos.length}${MESSAGE.BOUGHT_LOTTOS}`);
    this.#boughtLottos.forEach((lotto) => {
      lotto.printLotto();
    });
  }

  #validatePrice(price) {
    Validation.isPriceNull(price);
    Validation.isPriceNotNumber(price);
    Validation.isPriceBadUnit(price);
  }


  #generateRandomLotto() {
    return new Lotto(Random.pickUniqueNumbersInRange(RANGE_START, RANGE_END, BALL_NUMBERS).sort());
  }
};

export default Game;