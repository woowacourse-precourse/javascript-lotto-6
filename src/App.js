import LottoSimulator from './controller/LottoSimulator.js';

class App {
  #lottoSimulator;

  constructor() {
    this.#lottoSimulator = new LottoSimulator();
  }

  async play() {
    await this.#lottoSimulator.simulation();
  }
}

export default App;
