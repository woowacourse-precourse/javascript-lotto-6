import LottoController from "./LottoController.js";

class App {
  async play() {
    const controller = new LottoController();
    await controller.askBudget();
    controller.getLottoCount();
  }
}

export default App;
