import LottoProcess from './domain/LottoProcess.js';

class App {
  async play() {
    const lottoGame = new LottoProcess();
    await lottoGame.processStart();
  }
}

export default App;
