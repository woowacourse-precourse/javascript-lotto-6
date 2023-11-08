import LottoController from "./controller/LottoController";
import { Console } from "@woowacourse/mission-utils";

class App {
  #controller;

  constructor() {
    this.#controller = new LottoController();
  }

  async play() {
    try{
      await this.#controller.gameStart();
    }catch(error){
      Console.print(error.message);
    }
  }
}

export default App;
