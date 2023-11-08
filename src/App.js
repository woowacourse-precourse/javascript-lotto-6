import { Console } from "@woowacourse/mission-utils";
import LottoController from "./controller/LottoController.js";

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoController();
  }

  async play() {
    try {
      await this.#lottoGame.playGame();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
