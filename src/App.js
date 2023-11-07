import LottoController from "./controller/LottoController";

class App {
  async play() {
    const controller = new LottoController();
    await controller.process();
  }
}

export default App;
