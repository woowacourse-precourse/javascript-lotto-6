import Lotto from './domain/Lotto.js';

class App {
  async play() {
    const lotto = new Lotto();
    lotto.lottoPurchase();
  }
}

export default App;
