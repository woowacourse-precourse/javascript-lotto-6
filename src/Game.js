import { Console, Random } from '@woowacourse/mission-utils';
import User from './User.js';
import Validation from './Validation.js';
import MESSAGE from './MESSAGE.js';
import Lotto from './Lotto.js';

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

  static #pickLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #setMyLotto() {
    let count = this.#lottoAmount;
    while (count > 0) {
      this.#myLotto.push(new Lotto(Game.#pickLottoNumbers()));
      count -= 1;
    }
  }

  async play() {
    await this.#setLottoAmount();
    Console.print(Game.#pickLottoNumbers());
  }
}

export default Game;
