import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';
import { PROMPT_MESSAGE } from './constants.js';

class Inputs {
  returnPurchaseAmount() {
    return this.getPromptedAmount(PROMPT_MESSAGE.promptPurchaseAmount);
  }

  async returnWinningNumbers() {
    const winningNumbers = await this.getPromptedWinningNumbers(PROMPT_MESSAGE.promptWinningNumbers);
    const bonusNumber = await this.getPromptedBonusNumber(PROMPT_MESSAGE.promptBonusNumber, winningNumbers);
    return { winningNumbers, bonusNumber };
  }

  async getPromptedAmount(message) {
    try {
      const purchaseAmount = await this.getInput(message);
      return Validation.validatePurchaseAmount(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return this.getPromptedAmount(message);
    }
  }

  async getPromptedWinningNumbers(message) {
    try {
      const winningNumbers = await this.getInput(message);
      return Validation.validateWinningNumbers(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.getPromptedWinningNumbers(message);
    }
  }

  async getPromptedBonusNumber(message, winningNumbers) {
    try {
      const bonusNumber = await this.getInput(message);
      return Validation.validateBonusNumber(bonusNumber, winningNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.getPromptedBonusNumber(message, winningNumbers);
    }
  }

  getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }
}

export default Inputs;
