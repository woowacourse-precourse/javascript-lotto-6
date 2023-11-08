import LottoController from "./Controller/LottoController.js";

class App {
  async play() {
    const lottoController = new LottoController();
    await lottoController.play();
  }
}

export default App;
