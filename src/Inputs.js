import InputView from './View/InputView.js';
import Validation from './Validation.js';
import { PROMPT_MESSAGE } from './constants.js';

class Inputs {
  constructor() {
    this.inputView = new InputView();
  }

  async returnPurchaseAmount() {
    return this.getPromptedValue(PROMPT_MESSAGE.promptPurchaseAmount, Validation.validatePurchaseAmount);
  }

  async returnWinningNumbers() {
    const winningNumbers = await this.getPromptedValue(
      PROMPT_MESSAGE.promptWinningNumbers,
      Validation.validateWinningNumbers,
    );
    const bonusNumber = await this.getPromptedValue(PROMPT_MESSAGE.promptBonusNumber, (bonus) =>
      Validation.validateBonusNumber(bonus, winningNumbers),
    );
    return { winningNumbers, bonusNumber };
  }

  async getPromptedValue(message, validateFunction) {
    try {
      const input = await this.inputView.getInput(message);
      return validateFunction(input);
    } catch (error) {
      this.inputView.printError(error.message);
      return this.getPromptedValue(message, validateFunction);
    }
  }
}

export default Inputs;
