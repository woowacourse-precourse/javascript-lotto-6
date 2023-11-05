import Lotto from './models/Lotto.js';
import LottoCalculator from './models/LottoCalculator.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  constructor() {
    this.lottoCalculator = new LottoCalculator();
  }

  async play() {
    await this.inputMoney();
  }

  async inputMoney() {
    const answer = await InputView.readMoney();
    this.buyLotto(answer);
  }

  buyLotto(money) {
    const lottoes = Lotto.buyAutomaticLotto(money);
    const numbers = lottoes.map((lotto) => lotto.getNumbers());
    OutputView.outputBuyResult(numbers);
  }
}

export default App;
