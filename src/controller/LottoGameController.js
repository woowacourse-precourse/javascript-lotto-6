import { Console } from '@woowacourse/mission-utils';
import LottoCalculator from '../LottoCalculator.js';
import InputView from '../View/InputViews.js';
import OutputView from '../View/OutputViews.js';
import LottoGameService from '../service/LottoGameService.js';
import Validator from '../utils/Validator.js';
import { condition } from '../consts.js';

class LottoGameController {
  #purchaseAmount;

  #purchaseCount;

  #publishedLottos;

  #winningNumbers;

  #bonusNumber;

  #ranks;

  #totalWinnings;

  lottoGameService = new LottoGameService();

  lottoCalaulator = new LottoCalculator();

  async lottoGame() {
    this.#purchaseAmount = await this.inputPurchaseAmount();
    this.#purchaseCount = this.lottoGameService.getPurchaseCount(
      this.#purchaseAmount,
    );
    OutputView.printPurchaseCount(this.#purchaseCount);

    this.printPublishedLottos();

    this.#winningNumbers = await this.inputWinningNumbers();
    this.#bonusNumber = await this.inputBonusNumber();

    this.#ranks = this.lottoGameService.getRanksArray(
      this.#publishedLottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );

    this.printWinningStatistics();

    this.#totalWinnings = this.lottoCalaulator.addAllWinnings(this.#ranks);
    this.printRateOfReturn();
  }

  async inputPurchaseAmount() {
    try {
      let purchaseAmount = await InputView.readPurchaseAmout();
      Validator.validateInput(purchaseAmount);
      purchaseAmount = Number(purchaseAmount);
      Validator.validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      throw new Error(error);
    }
  }

  printPublishedLottos() {
    this.#publishedLottos = this.lottoGameService.getPublishedLottos(
      this.#purchaseCount,
    );
    this.#publishedLottos.forEach((lotto) => {
      OutputView.printPublishedLotto(lotto);
    });
  }

  async inputWinningNumbers() {
    try {
      let winningNumbers = await InputView.readWinningNumbers();
      Validator.validateInput(winningNumbers);
      Validator.validateWinnigNumbersString(winningNumbers);
      winningNumbers = winningNumbers
        .split(condition.separator)
        .map((number) => Number(number));
      Validator.validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      throw new Error(error);
    }
  }

  async inputBonusNumber() {
    try {
      let bonusNumber = await InputView.readBonusNubmer();
      Validator.validateInput(bonusNumber);
      bonusNumber = Number(bonusNumber);
      Validator.validateBonusNumber(bonusNumber);
      Validator.validateBonusNumberDuplicate(this.#winningNumbers, bonusNumber);
      return bonusNumber;
    } catch (error) {
      throw new Error(error);
    }
  }

  printWinningStatistics() {
    OutputView.printWinningStatistics(this.#ranks);
  }

  printRateOfReturn() {
    const rateOfReturn = this.lottoCalaulator.getRateOfReturn(
      this.#totalWinnings,
      this.#purchaseAmount,
    );
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default LottoGameController;
