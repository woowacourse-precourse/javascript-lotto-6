import Lotto from './model/Lotto.js';
import Compare from './model/Compare.js';
import InputView from './view/inputView.js';
import OutputView from './view/outputView.js';

class App {
  #inputView = new InputView();
  #outputView = new OutputView();
  #compare;

  #coin = 0;
  #boughtLottos = [];
  #winning = [];
  #bonus = 0;

  async play() {
    await this.buyLottos(this.#inputView, this.#outputView);
    await this.getWinningNumber(this.#inputView);
    this.getWinningResult(this.#outputView);
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

  // console.log('당첨결과 출력');
  getWinningResult(outputView) {
    this.#compare = new Compare(this.#winning, this.#bonus);
    outputView.winningResult();
    outputView.matchedThreeNumber(
      this.#compare.getMatchedThreeNumber(this.#boughtLottos)
    );
    outputView.matchedFourNumber(
      this.#compare.getMatchedFourNumber(this.#boughtLottos)
    );
    outputView.matchedFiveNumber(
      this.#compare.getMatchedFiveNumber(this.#boughtLottos)
    );
    outputView.matchedBonusNumber(
      this.#compare.getMatchedBonusNumber(this.#boughtLottos)
    );
    outputView.matchedSixNumber(
      this.#compare.getMatchedSixNumber(this.#boughtLottos)
    );

    outputView.profit(this.#compare.getProfit(this.#boughtLottos, this.#coin));
  }
}

export default App;
