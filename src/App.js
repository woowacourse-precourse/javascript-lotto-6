import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

import LottoGame from './LottoGame.js';
import LottoMachine from './LottoMachine.js';

import lottoPriceValidator from './validator/lottoPriceValidator.js';
import winnigNumberValidator from './validator/winningNumberValidator.js';
import bonusNumberValidator from './validator/bonusNumberValidator.js';

import errorHandler from './util/errorHandler.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame(new LottoMachine());
  }

  async play() {
    await this.#generateLottoProcess();
    await this.#lottoResultProcess();
    this.#gameOver();
  }

  async #generateLottoProcess() {
    const lottoPrice = await this.#validateLottoPrice();
    const lottos = this.#lottoGame.purchace(lottoPrice);
    OutputView.printTotalLottos(lottos);
  }

  async #validateLottoPrice() {
    const isValid = await errorHandler(
      InputView.getLottoPrice,
      lottoPriceValidator.checkLottoPrice
    );

    return isValid;
  }

  async #lottoResultProcess() {
    const winningNumbers = await this.#validateWinningNumbers();
    const bonusNumber = await this.#validateBonusNumber(winningNumbers);

    const result = this.#lottoGame.compareLottoResult(winningNumbers, bonusNumber);
    OutputView.printResult(result);
  }

  async #validateWinningNumbers() {
    const isValid = await errorHandler(
      InputView.getWinnigNumbers,
      winnigNumberValidator.checkWinningNumbers
    );

    return isValid;
  }

  async #validateBonusNumber(winningNumbers) {
    const isValid = await errorHandler(
      InputView.getBonusNumber,
      bonusNumberValidator.checkBonusNumber,
      winningNumbers
    );

    return isValid;
  }

  #gameOver() {
    return;
  }
}

export default App;
