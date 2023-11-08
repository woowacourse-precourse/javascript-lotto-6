import LottoController from "./controller/LottoController";

class App {
  async play() {
    const lottoController = new LottoController();
    await lottoController.playGame();
  }
}

export default App;
