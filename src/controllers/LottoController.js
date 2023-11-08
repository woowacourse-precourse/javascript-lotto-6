import InputView from '../views/InputView';
import NUMBER from '../constants/Number';
import OutputView from '../views/OutputView';
import MyLotto from '../models/MyLotto';
import WinningLotto from '../models/WinningLotto';
import ValidateController from './ValidateController';
import LottoStatistics from '../models/LottoStatistics';

class LottoController {
  #myLotto;

  #winningLotto;

  #statistics;

  async lottoStart() {
    await this.setMyLotto();
    await this.setWinningLotto();
    this.setMyLottoResult();
  }

  async getValidInput(getInputFunction, validateFunction) {
    while (true) {
      try {
        const input = await getInputFunction();
        const inputResult = await validateFunction(input);
        return inputResult;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  async setMyLotto() {
    const lottoCount = await this.setMyLottoCount();
    this.createMyLotto(lottoCount);
  }

  async setMyLottoCount() {
    const purchaseLottoAmount = await this.getPurchaseLottoAmount();
    const lottoCount = this.calculateLottoCount(purchaseLottoAmount);
    this.printLottoCount(lottoCount);
    return lottoCount;
  }

  createMyLotto(lottoCount) {
    this.#myLotto = new MyLotto(lottoCount);
    this.#myLotto.printMyLottoNumbers();
  }

  async setWinningLotto() {
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumbers(winningNumbers);
    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  getPurchaseLottoAmount() {
    return this.getValidInput(
      InputView.getPurchaseLottoAmount,
      ValidateController.validatePurchaseLottoAmount,
    );
  }

  calculateLottoCount(lottoAmount) {
    return parseInt(lottoAmount / NUMBER.PURCHASE_AMOUNT_UNIT, 10);
  }

  printLottoCount(lottoCount) {
    OutputView.printLottoCount(lottoCount);
  }

  getWinningNumbers() {
    return this.getValidInput(
      InputView.getWinningNumbers,
      ValidateController.validateWinningNumbers,
    );
  }

  getBonusNumbers(winningNumbers) {
    return this.getValidInput(
      () => InputView.getBonusNumber(winningNumbers),
      input => ValidateController.validateBonusNumber(winningNumbers, input),
    );
  }

  setMyLottoResult() {
    const winningNumbers = this.#winningLotto.getWinningNumbers();
    const bonusNumber = this.#winningLotto.getBonusNumber();
    const matchingResult = this.#myLotto.findMatching(winningNumbers, bonusNumber);

    this.#statistics = new LottoStatistics(matchingResult);
    this.#statistics.printLottoStatistics();
    this.#statistics.printRateOfReturn();
  }
}

export default LottoController;
