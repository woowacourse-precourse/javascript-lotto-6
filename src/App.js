import Lotto from './domains/Lotto.js';
import Compare from './domains/Compare.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #inputView = new InputView();
  #outputView = new OutputView();

  #coin = 0;
  #boughtLottos = [];
  #winning = [];

  #bonus = 0;

  async play() {
    await this.buyLottos(this.#inputView, this.#outputView);
    await this.getWinningNumber(this.#inputView);
    const { matched, profit } = this.getMachedResult();
    this.printWinningResult(matched, profit, this.#outputView);
  }

  async buyLottos(inputView, outputView) {
    this.#coin = await inputView.coin();
    outputView.insertCoins(this.#coin);

    for (let i = 0; i < this.#coin; i++) {
      const lotto = Lotto.random();
      this.#boughtLottos.push(lotto);
      outputView.boughtLotto(lotto.getNumbersString());
    }
  }

  async getWinningNumber(inputView) {
    const winningNumber = await inputView.winning();
    this.#winning = new Lotto(winningNumber);
    this.#bonus = await inputView.bonus(winningNumber);
  }

  getMachedResult() {
    const compare = new Compare(this.#winning, this.#bonus);
    const matched = compare.getMathced(this.#boughtLottos);
    const profit = compare.getProfit(Object.values(matched), this.#coin);
    return {
      matched: Object.entries(matched),
      profit,
    };
  }

  printWinningResult(matched, profit, outputView) {
    outputView.winningResult();
    for (const [digit, value] of matched) {
      outputView.matchedAll(digit, value);
    }
    outputView.profit(profit);
  }
}

export default App;
