import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import Validation from './Validation.js';
import MESSAGE from './MESSAGE.js';

class Game {
  async play() {
    try {
      const priceInput = await User.readInput(MESSAGE.enterPrice);
      Console.print(Validation.price(priceInput));
    } catch (e) {
      Console.print(e);
      throw e;
    }
  }
}

export default Game;
