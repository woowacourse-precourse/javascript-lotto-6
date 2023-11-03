import LottoController from "./controller/Controller";
import { ERROR_MESSAGES } from "./utils/Messages";

class App {
  async play() {
      const lottoGame = new LottoController();
      await lottoGame.playGame();
  }
}

export default App;
