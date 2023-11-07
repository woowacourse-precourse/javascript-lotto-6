import Controller from "./Controller.js";

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  async play() {
    await this.#controller.purchaseLottos();
    await this.#controller.setWinnings();
    await this.#controller.setBonus();
    this.#controller.announceLottery();
    this.#controller.announceProfit();
  }
}

export default App;
