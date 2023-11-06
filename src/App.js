import LottoMachine from './controller/LottoMachine.js';

class App {
  #lottoMachine;
  constructor() {
    this.#lottoMachine = new LottoMachine();
  }
  async play() {
    await this.#lottoMachine.run();
  }
}

export default App;
