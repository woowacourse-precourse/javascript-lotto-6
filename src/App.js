import LottoController from "./LottoController.js";

class App {
  async play() {
    const controller = new LottoController();
    controller.askBudget();
  }
}

export default App;
