import LottoController from "./LottoController.js";

class App {
  async play() {
    const controller = new LottoController();
    await controller.askBudget();
    controller.createLottoTickets();
    controller.showLottoTickets();
  }
}

export default App;
