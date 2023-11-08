import LottoMachine from './LottoMachine.js';

class App {
  async play() {
    const lottoSeller = new LottoMachine();
    await lottoSeller.sell();
  }
}

export default App;
