import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }
  async play() {
    try {
      await this.#lottoGame.run();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
