import LottoCompany from './domain/LottoCompany.js';

class App {
  async play() {
    const lottoShop = new LottoCompany();
    await lottoShop.lottoProcess();
  }
}

export default App;
