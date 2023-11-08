import LottoController from "./Controller/lottoController.js";

class App {
  async play() {
    const lottoController = new LottoController();
    await lottoController.lottoGame();
  }
}

export default App;
