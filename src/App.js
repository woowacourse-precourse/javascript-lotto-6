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
    const compare = new Compare(this.#winning, this.#bonus);
    this.printWinningResult(compare, this.#outputView);
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

  printWinningResult(compare, outputView) {
    outputView.winningResult();

    outputView.matchedThree(compare.getMatchedThree(this.#boughtLottos));
    outputView.matchedFour(compare.getMatchedFour(this.#boughtLottos));
    outputView.matchedFive(compare.getMatchedFive(this.#boughtLottos));
    outputView.matchedBonus(compare.getMatchedBonus(this.#boughtLottos));
    outputView.matchedSix(compare.getMatchedSix(this.#boughtLottos));

    outputView.profit(compare.getProfit(this.#boughtLottos, this.#coin));
  }
}

export default App;
