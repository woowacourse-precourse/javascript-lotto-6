import { Console, Random } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';

class App {
  #lottoGame;

  constructor() { 
    this.#lottoGame = new LottoGame();
  }

  async play() {
    try {
      await this.#lottoGame.gameStart();
    } catch (error) {
      Console.print(error.message);
    }
    

  }
}

export default App;
