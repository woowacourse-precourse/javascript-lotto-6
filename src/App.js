import LottoFlow from './controller/LottoFlow.js';

class App {
  #lottoFlow;

  async play() {
    this.#lottoFlow = new LottoFlow();
    this.#lottoFlow.makeLotto();
  }
}

export default App;
