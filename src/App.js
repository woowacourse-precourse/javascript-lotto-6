import LottoController from "./controller/Controller";
import { ERROR_MESSAGES } from "./utils/Messages";

class App {
  async play() {
    try {
      const lottoGame = new LottoController();
      await lottoGame.playGame();
    } catch (error) {
      throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}

export default App;
