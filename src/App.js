import Lotto from './models/Lotto.js';
import LottoCalculator from './models/LottoCalculator.js';
import InputView from './views/InputView.js';

class App {
  constructor() {
    this.lottoCalculator = new LottoCalculator();
  }

  async play() {
    await this.inputMoney();
  }

  async inputMoney() {
    const answer = await InputView.readMoney();
  }
}

export default App;
