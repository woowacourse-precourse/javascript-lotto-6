import InputReader from './view/InputReader.js';
import PromptPrinter from './view/promptPrinter.js';
import {
  ValidateWinningNumbersUserInput,
  ValidatePurchasePriceUserInput,
  ValidateBonusNumberUserInput,
} from './utils/ValidateUserInput.js';

class App {
  #inputReader;
  #promptPrinter;

  constructor() {
    this.#inputReader = new InputReader();
    this.#promptPrinter = new PromptPrinter();
  }

  async play() {
    const purchasePrice = await this.requestPurchasePrice();
    const winningNumbers = await this.requestWinningNumbers();
    const bonusNumber = await this.requestBonusNumber(winningNumbers);
  }

  async requestPurchasePrice() {
    try {
      const purchasePrice = await this.#inputReader.purchasePrice();
      new ValidatePurchasePriceUserInput(purchasePrice);

      return purchasePrice;
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.requestPurchasePrice();
    }
  }

  async requestWinningNumbers() {
    try {
      const winningNumbers = await this.#inputReader.winningNumbers();
      new ValidateWinningNumbersUserInput(winningNumbers);

      return winningNumbers;
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.requestWinningNumbers();
    }
  }

  async requestBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await this.#inputReader.bonusNumber();
      new ValidateBonusNumberUserInput(bonusNumber, winningNumbers);

      return bonusNumber;
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.requestBonusNumber(winningNumbers);
    }
  }
}

export default App;
