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
    this.#winningNumbers = await this.#setWinningNumbers();
    this.#bonusNumber = await this.#setBonusNumber();
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

  async #setWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(MESSAGE.LOTTO_INPUT);
        const lotto = new Lotto(input.split(SPLIT_SEPARATOR).map((number) => Number(number)).sort((a, b) => a - b));
        return lotto;
      } catch(e) {
        Console.print(e);
      }
    }
  }

  async #setBonusNumber() {
    while (true) {
      try {
        const input = await Console.readLineAsync(MESSAGE.BONUS_INPUT);
        const bonusNumber = Number(input);
        this.#validateBonusNumber(bonusNumber);
        return bonusNumber;
      } catch(e) {
        Console.print(e);
      }
    }
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

  #validateBonusNumber(bonusNumber) {
    Validation.isBonusNotNumber(bonusNumber);
    Validation.isBonusBadRange(bonusNumber);
  }

  #generateRandomLotto() {
    return new Lotto(Random.pickUniqueNumbersInRange(RANGE_START, RANGE_END, BALL_NUMBERS).sort((a, b) => a - b));
  }
};

export default Game;