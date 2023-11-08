import LottoController from "./controller/LottoController.js";

class App {
  async play() {
    const lottoController = new LottoController();
    await lottoController.run();
  }
}

export default App;
