import LottoGame from './domain/LottoCompany.js';

class App {
  async play() {
    const lottoCompany = new LottoGame();
    await lottoCompany.lottoProcess();
  }
}

export default App;
