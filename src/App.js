import LottoController from "./constroller/LottoController.js";

class App {
  async play() {
    try {
      const lottoGame = new LottoController();
      await lottoGame.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
