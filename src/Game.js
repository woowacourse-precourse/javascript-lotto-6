import { Console, Random } from '@woowacourse/mission-utils';
import User from './User.js';
import Validation from './Validation.js';
import MESSAGE from './MESSAGE.js';
import Lotto from './Lotto.js';

class Game {
  #lottoAmount;

  #myLotto = [];

  #winLotto;

  #bonusNumber;

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

  #printMyLotto() {
    User.printMessage(MESSAGE.purchasedLotto(this.#lottoAmount, this.#myLotto));
  }

  static async #enterWinNumbers() {
    const winNumbersInput = await User.readInput(MESSAGE.enterWinNumbers);
    return Validation.winNumbers(winNumbersInput);
  }

  async #setWinLotto() {
    this.#winLotto = new Lotto(await Game.#enterWinNumbers());
  }

  static async #enterBonusNumber() {
    const bonusNumberInput = await User.readInput(MESSAGE.enterBonusNumber);
    return Validation.bonusNumber(bonusNumberInput);
  }

  async #setBonusNumber() {
    this.#bonusNumber = await Game.#enterBonusNumber();
  }

  async play() {
    await this.#setLottoAmount();
    this.#setMyLotto();
    this.#printMyLotto();
    await this.#setWinLotto();
    await this.#setBonusNumber();
    Console.print(this.#bonusNumber);
  }
}

export default Game;
