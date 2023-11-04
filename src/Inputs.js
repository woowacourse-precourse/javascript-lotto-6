import { Console } from '@woowacourse/mission-utils';
import Validation from './Validation.js';

class Inputs {
  returnPurchaseAmount() {
    return this.getPromptedAmount();
  }

  async getPromptedAmount() {
    try {
      const purchaseAmount = await this.getInput('구입금액을 입력해 주세요.');
      return Validation.validatePurchaseAmount(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return this.getPromptedAmount();
    }
  }

  returnWinningNumbers() {
    this.getPromptedWinningNumbers();
  }

  async getPromptedWinningNumbers() {
    try {
      const winningNumbers = await this.getInput('당첨 번호를 입력해 주세요.');
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getPromptedWinningNumbers;
    }
  }

  getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }
}

export default Inputs;
