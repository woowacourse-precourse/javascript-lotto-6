import { Console } from "@woowacourse/mission-utils";
import LottoController from "./Controller/LottoController";

class App {
  #controller;

  constructor() {
    this.#controller = new LottoController();
  }

  async play() {
    try {
      await this.#controller.lotto();
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}

export default App;
