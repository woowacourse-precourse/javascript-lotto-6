import { LottoGame } from './controller/LottoGame';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const lottogame = new LottoGame();
      lottogame.startGame();
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
