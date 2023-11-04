import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';

class Inputs {
  returnPurchaseAmount() {
    return this.getPromptedAmount('구입금액을 입력해 주세요.');
  }

  returnWinningNumbers() {
    return this.getPromptedWinningNumbers('당첨 번호를 입력해 주세요.');
  }

  returnBonnusNumber() {
    return this.getPromptedBonusNumber('보너스 번호를 입력해 주세요.');
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

  async getPromptedBonusNumber(message) {
    try {
      const bonusNumbers = await this.getInput(message);
      return bonusNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getPromptedBonusNumber(message);
    }
  }

  getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }
}

export default Inputs;
