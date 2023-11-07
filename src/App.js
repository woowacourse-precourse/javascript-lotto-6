import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import Lotto from "./Model/Lotto.js";
import Validator from "./Validator.js";
import { COMMA } from "./constants/constants.js";
import Result from "./Model/Result.js";

class App {
  #lotto;
  #winningNumbers;
  #bonusNumber;
  #resultClass;
  #matchResult;
  #incomePercentage;

  async play() {
    await this.initializePurchaseAmount();
    OutputView.printLotteries(this.#lotto.getLotteries());

    await this.initializeWinningNumbers();
    await this.initializeBonusNumber();
    this.initializeResult();
    OutputView.printResult(this.#matchResult);
    OutputView.printIncomePercentage(this.#incomePercentage);
  }

  async initializePurchaseAmount() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      Validator.validatePurchaseAmount(purchaseAmount);

      this.#lotto = new Lotto(purchaseAmount);
    } catch (error) {
      OutputView.print(error);
      await this.initializePurchaseAmount();
    }
  }

  async initializeWinningNumbers() {
    try {
      const winningNumbersInput = await InputView.readWinningNumbers();
      const winningNumbers = winningNumbersInput.split(COMMA);
      Validator.validateWinningNumbers(winningNumbers);

      this.#winningNumbers = winningNumbers;
    } catch (error) {
      OutputView.print(error);
      await this.initializeWinningNumbers();
    }
  }

  async initializeBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      Validator.validateBonusNumber(bonusNumber, this.#winningNumbers);

      this.#bonusNumber = bonusNumber;
    } catch (error) {
      OutputView.print(error);
      await this.initializeBonusNumber();
    }
  }

  initializeResult() {
    this.#resultClass = new Result(
      this.#lotto.getLotteries(),
      this.#winningNumbers,
      this.#bonusNumber,
    );

    this.#matchResult = this.#resultClass.checkLotto();
    this.#incomePercentage =
      (this.#resultClass.calculateIncome() /
        Number(this.#lotto.getPurchaseAmount())) *
      100;
  }
}

export default App;
