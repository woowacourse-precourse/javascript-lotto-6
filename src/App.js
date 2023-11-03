import LottoShop from './domain/LottoShop.js';

class App {
  async play() {
    const lottoShop = new LottoShop();
    lottoShop.lottoPurchase();
  }
}

export default App;
