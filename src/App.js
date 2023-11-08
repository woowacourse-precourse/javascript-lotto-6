import LottoController from "./LottoController.js";

class App {
  async play() {
    const controller = new LottoController();
    await controller.askBudget();
    controller.createLottoTickets();
    controller.showLottoTickets();
    await controller.askWinningNum();
    await controller.askBonusNum();
    controller.checkResult();
    controller.printRankStat();
  }
}

export default App;
