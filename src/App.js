import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import Lotto from "./Model/Lotto.js";
import Validator from "./Validator.js";
import { COMMA } from "./constants/constants.js";

class App {
  #lotto;
  #winningNumbers;
  #bonusNumber;

  async play() {
    await this.initializePurchaseAmount();
    OutputView.printLotteries(this.#lotto.getLotteries());

    await this.initializeWinningNumbers();
    await this.initializeBonusNumber();
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
}

export default App;
