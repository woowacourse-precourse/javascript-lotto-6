import LottoController from "./Controller/LottoController";
import { Console } from "@woowacourse/mission-utils";

class App {
  #lotto;
  constructor() {
    this.#lotto = new LottoController();
  }

  async play() {
    await this.#lotto.LottoStart();
  }

}

export default App;
