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
  #result;

  async play() {
    await this.initializePurchaseAmount();
    OutputView.printLotteries(this.#lotto.getLotteries());

    await this.initializeWinningNumbers();
    await this.initializeBonusNumber();
    this.initializeResult();
    result.checkLotto();
  }

  async initializePurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(purchaseAmount);

    this.#lotto = new Lotto(purchaseAmount);
  }

  async initializeWinningNumbers() {
    const winningNumbersInput = await InputView.readWinningNumbers();
    const winningNumbers = winningNumbersInput.split(COMMA);
    Validator.validateWinningNumbers(winningNumbers);

    this.#winningNumbers = winningNumbers;
  }

  async initializeBonusNumber() {
    const bonusNumber = await InputView.readBonusNumber();
    Validator.validateBonusNumber(bonusNumber, this.#winningNumbers);

    this.#bonusNumber = bonusNumber;
  }

  initializeResult() {
    this.#result = new Result(
      this.#lotto.getLotteries(),
      this.#winningNumbers,
      this.#bonusNumber,
    );
  }
}

export default App;
