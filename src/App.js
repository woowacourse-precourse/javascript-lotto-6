import Price from './Price.js';

class App {
  async play() {
    const userPriceInput = await Price.getUserPrice();
    const lottoAmount = Price.calculateLottoAmount(userPriceInput);
  }
}

export default App;
