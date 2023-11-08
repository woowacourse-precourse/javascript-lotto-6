import LottoFlow from './controller/LottoFlow';

class App {
  #lottoFlow;

  async play() {
    this.#lottoFlow = new LottoFlow();
    this.#lottoFlow.startLotto();
  }
}

export default App;
