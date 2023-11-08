import LottoController from "./controller/LottoController.js";

class App {
  async play() {
    await LottoController.init();
  }
}

export default App;
