/**
 * 추후, 맨 처음 docs 커밋 바꾸기 -> 동사로 시작하게.
 */
import { Console } from '@woowacourse/mission-utils';
import Lottery from './Lottery.js';

class App {
  #ERRORPREFIX = '[ERROR]';

  #game = new Lottery();

  async play() {
    try {
      // TODO
      await this.#game.readPayMoney();
      await this.#game.readWinningNumberList();
      await this.#game.readBonusNumber();
      this.#game.matchNumbers();
      this.#game.printWinnigCount();
    } catch (e) {
      // prefix 이용
      Console.print(`${this.#ERRORPREFIX} ${e.message}`);
    }
  }
}

export default App;
