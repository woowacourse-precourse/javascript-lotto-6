import { Console, Random } from '@woowacourse/mission-utils';
import User from './User.js';
import Validation from './Validation.js';
import MESSAGE from './MESSAGE.js';

class Game {
  #lottoAmount;

  #myLotto = [];

  async #getLottoPrice() {
    const priceInput = await User.readInput(MESSAGE.enterPrice);
    return Validation.price(priceInput);
  }

  #priceToAmount(price) {
    return price / 1000;
  }

  async play() {}
}

export default Game;
