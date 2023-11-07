import Lotto from './model/Lotto.js';
import Compare from './model/Compare.js';
import InputView from './view/inputView.js';
import OutputView from './view/outputView.js';

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
    outputView.matchedThreeNumber(
      compare.getMatchedThreeNumber(this.#boughtLottos)
    );
    outputView.matchedFourNumber(
      compare.getMatchedFourNumber(this.#boughtLottos)
    );
    outputView.matchedFiveNumber(
      compare.getMatchedFiveNumber(this.#boughtLottos)
    );
    outputView.matchedBonusNumber(
      compare.getMatchedBonusNumber(this.#boughtLottos)
    );
    outputView.matchedSixNumber(
      compare.getMatchedSixNumber(this.#boughtLottos)
    );

    outputView.profit(compare.getProfit(this.#boughtLottos, this.#coin));
  }
}

export default App;
