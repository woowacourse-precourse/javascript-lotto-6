import LottoController from "./Controller/LottoController";
import { Console } from "@woowacourse/mission-utils";

class App {
  #lotto;
  constructor() {
    this.#lotto = new LottoController();
  }

  async play() {
    try {
      await this.#lotto.LottoStart();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
