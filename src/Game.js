import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import Validation from './Validation.js';
import MESSAGE from './MESSAGE.js';

class Game {
  async play() {
    try {
      const priceInput = await User.readInput(MESSAGE.enterPrice);
      const numberOfLotto = Validation.price(priceInput) / 1000;
      Console.print(numberOfLotto);
    } catch (e) {
      Console.print(e);
      throw e;
    }
  }
}

export default Game;
