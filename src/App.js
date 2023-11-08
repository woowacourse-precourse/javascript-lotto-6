import Lotto from './Lotto.js';
import LottoCalculator from './LottoCalculator.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  constructor() {
    this.lottoCalculator = new LottoCalculator();
  }

  async play() {
    await this.inputMoney();
  }

  async inputMoney() {
    try {
      const answer = await InputView.readMoney();
      await this.buyLotto(answer);
    } catch (e) {
      OutputView.printError(e);
      await this.inputMoney();
    }
  }

  async buyLotto(money) {
    const lottoes = Lotto.buyAutomaticLotto(money);
    this.lottoCalculator.setLottoes(lottoes);

    const numbers = lottoes.map((lotto) => lotto.getNumbers());
    OutputView.printBuyResult(numbers);

    await this.inputNumbers();
  }

  async inputNumbers() {
    try {
      const numbers = await InputView.readNumbers();
      const bonus = await InputView.readBonus();
      this.lottoCalculator.setWinningNumber(numbers, bonus);
      await this.printResult();
    } catch (e) {
      OutputView.printError(e);
      await this.inputNumbers();
    }
  }

  async printResult() {
    const result = this.lottoCalculator.getResult();
    const { profit } = LottoCalculator.getProfitWithResult(result);
    OutputView.printWinningResult(result.slice(1).reverse(), profit);
  }
}

export default App;
