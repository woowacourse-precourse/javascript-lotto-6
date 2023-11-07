import { MissionUtils } from '@woowacourse/mission-utils';
import GameController from './Controller/GameController';

class App {
  constructor() {
    this.gameController = new GameController();
  }
  async play() {
    try {
      await this.gameController.gameLogic();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
