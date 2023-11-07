import { Console, Random } from '@woowacourse/mission-utils';
import User from './User.js';
import Validation from './Validation.js';
import MESSAGE from './MESSAGE.js';

class Game {
  #lottoAmount;

  #myLotto = [];

  static async #getLottoPrice() {
    const priceInput = await User.readInput(MESSAGE.enterPrice);
    return Validation.price(priceInput);
  }

  static #priceToAmount(price) {
    return price / 1000;
  }

  async #setLottoAmount() {
    const price = await Game.#getLottoPrice();
    this.#lottoAmount = Game.#priceToAmount(price);
  }

  async play() {
    await this.#setLottoAmount();
    Console.print(this.#lottoAmount);
  }
}

export default Game;
