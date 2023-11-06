import { GameManager } from './controller/GameManager';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const gamemanager = new GameManager();
      await gamemanager.startGame();
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
