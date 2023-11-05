import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import LottoGame from './LottoGame.js';
import errorHandler from './util/errorHandler.js';
import lottoPriceValidator from './validator/lottoPriceValidator.js';
import winnigNumberValidator from './validator/winningNumberValidator.js';
import bonusNumberValidator from './validator/bonusNumberValidator.js';

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
    const lottoPrice = await this.#checkLottoPrice();
    const lottos = this.#lottoGame.purchace(lottoPrice);
    OutputView.printTotalLottos(lottos);
  }

  async #checkLottoPrice() {
    return await errorHandler(InputView.getLottoPrice, lottoPriceValidator.checkLottoPrice);
  }

  async #lottoResultProcess() {
    const winningNumbers = await this.#checkWinningNumbers();
    const bonusNumber = await this.#checkBonusNumber(winningNumbers);

    const result = this.#lottoGame.resultOfWinningDetails(winningNumbers, bonusNumber);
    OutputView.printResult(result);
  }

  async #checkWinningNumbers() {
    return await errorHandler(
      InputView.getWinnigNumbers,
      winnigNumberValidator.checkWinningNumbers
    );
  }

  async #checkBonusNumber(winningNumbers) {
    return await errorHandler(
      InputView.getBonusNumber,
      bonusNumberValidator.checkBonusNumber,
      winningNumbers
    );
  }

  #gameOver() {
    return;
  }
}

export default App;
