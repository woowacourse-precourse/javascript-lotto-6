import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import Validation from './util/Validation.js';
import LottoGame from './LottoGame.js';
import errorHandler from './util/errorHandler.js';

class App {
  #inputView;
  #outputView;
  #lottoGame;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#lottoGame = new LottoGame();
  }

  async play() {
    this.#lottoGame.setUpGameProcess();
    await this.#generateLottoProcess();

    const winnigNumbers = await this.#inputView.getWinnigNumbers();
    const bonusNumber = await this.#inputView.getBonusNumber();
    const result = this.#lottoGame.resultOfWinningDetails(winnigNumbers, bonusNumber);
    this.#outputView.printResult(result);

    this.#gameOver();
  }

  async #generateLottoProcess() {
    while (true) {
      const lottoPrice = await this.#inputView.getLottoPrice();
      const isValid = await errorHandler(lottoPrice, Validation.inputLottoPrice);

      const lottos = this.#lottoGame.purchace(lottoPrice);
      this.#outputView.printTotalLottos(lottos);
      if (isValid) break;
    }
  }

  #gameOver() {
    return;
  }
}

export default App;
