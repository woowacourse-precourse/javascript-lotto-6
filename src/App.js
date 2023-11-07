import { LottoService } from "./service";

class App {
  #lottoService = new LottoService();

  async play() {
    await this.#lottoService.buyLottos();
    await this.#lottoService.drawLotto();
    this.#lottoService.printResult();
  }
}

export default App;
