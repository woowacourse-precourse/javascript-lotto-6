import Game from "./Game.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const game = new Game()
    await game.gameRun();
  }
}

export default App;