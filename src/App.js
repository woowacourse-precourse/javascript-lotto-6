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
    await this.buyLotto(answer);
  }

  async buyLotto(money) {
    const lottoes = Lotto.buyAutomaticLotto(money);
    this.lottoCalculator.setLottoes(lottoes);

    const numbers = lottoes.map((lotto) => lotto.getNumbers());
    OutputView.outputBuyResult(numbers);

    await this.inputNumbers();
  }

  async inputNumbers() {
    const numbers = await InputView.readNumbers();
    const bonus = await InputView.readBonus();
    this.lottoCalculator.setWinningNumber(numbers, bonus);
  }
}

export default App;
