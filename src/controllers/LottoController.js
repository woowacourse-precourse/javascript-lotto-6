import processInputWithRetry from '../utils/processInputWithRetry.js';
import LottoManager from '../domains/LottoManager.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottoManager;

  #inputView;

  #outputView;

  constructor() {
    this.#lottoManager = new LottoManager();
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async #processPurchaseAmount() {
    await processInputWithRetry(
      this.#inputView.readPurchaseAmount.bind(this.#inputView),
      this.#lottoManager.purchaseLottos.bind(this.#lottoManager),
      this.#outputView.printErrorMessage.bind(this.#outputView),
    );
  }

  async #processWinningNumbers() {
    await processInputWithRetry(
      this.#inputView.readWinningNumbers.bind(this.#inputView),
      this.#lottoManager.setWinningNumbers.bind(this.#lottoManager),
      this.#outputView.printErrorMessage.bind(this.#outputView),
    );
  }

  async #processBonusNumber() {
    await processInputWithRetry(
      this.#inputView.readBounsNumber.bind(this.#inputView),
      this.#lottoManager.setBonusNumber.bind(this.#lottoManager),
      this.#outputView.printErrorMessage.bind(this.#outputView),
    );
  }

  #printTotalLottoNumbers() {
    const totalLottoNumbers = this.#lottoManager.getTotalLottoNumbers();
    this.#outputView.printTotalLottoNumbers(totalLottoNumbers);
  }

  #printLottoResult() {
    const winningResult = this.#lottoManager.getLottoWinningResult();
    const returnRate = this.#lottoManager.getLottoReturnRate();
    this.#outputView.printLottoResult(winningResult, returnRate);
  }

  async play() {
    await this.#processPurchaseAmount();
    this.#printTotalLottoNumbers();
    await this.#processWinningNumbers();
    await this.#processBonusNumber();
    this.#printLottoResult();
  }
}

export default LottoController;
