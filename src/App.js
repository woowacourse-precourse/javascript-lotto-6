import LottoController from "./Controller/LottoController";

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
