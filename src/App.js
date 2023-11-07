import LottoService from './service/LottoService';

class App {
  async play() {
    const lottoService = new LottoService();

    await lottoService.purchaseLotto();
    await lottoService.prizeLotto();
  }
}

export default App;
