import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import Validation from './util/Validation.js';
import LottoGame from './LottoGame.js';
import errorHandler from './util/errorHandler.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    this.#lottoGame.setUpGameProcess();
    await this.#generateLottoProcess();
    await this.#lottoResultProcess();
    this.#gameOver();
  }

  async #generateLottoProcess() {
    while (true) {
      const lottoPrice = await InputView.getLottoPrice();
      const isValid = await errorHandler(lottoPrice, Validation.inputLottoPrice);

      const lottos = this.#lottoGame.purchace(lottoPrice);
      OutputView.printTotalLottos(lottos);
      if (isValid) break;
    }
  }

  async #lottoResultProcess() {
    const winnigNumbers = await InputView.getWinnigNumbers();
    const bonusNumber = await InputView.getBonusNumber();
    const result = this.#lottoGame.resultOfWinningDetails(winnigNumbers, bonusNumber);
    OutputView.printResult(result);
  }

  #gameOver() {
    return;
  }
}

export default App;
