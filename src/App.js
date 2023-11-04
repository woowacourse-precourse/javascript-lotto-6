import LottoCompany from './domain/LottoCompany.js';

class App {
  async play() {
    const lottoCompany = new LottoCompany();
    await lottoCompany.lottoProcess();
  }
}

export default App;
