import LottoService from './service/LottoService.js';

class App {
  async play() {
    const lottoService = new LottoService();
    const { lottos, price } = await lottoService.purchaseLotto();

    await lottoService.prizeLotto(lottos, price);
  }
}

export default App;
