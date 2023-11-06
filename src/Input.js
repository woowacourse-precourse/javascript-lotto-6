import { Console } from '@woowacourse/mission-utils';

import getUserInput from './utils/getUserInput.js';
import { INPUT_MESSAGE } from './constants/messages.js';
import {
  validatePurchaseAmount,
  validateBonusNumber,
} from './utils/validate.js';

class Input {
  async getPurchaseAmount() {
    try {
      const purchaseAmount = await getUserInput(INPUT_MESSAGE.purchaseAmount);
      validatePurchaseAmount(purchaseAmount);

      return Number(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return await this.getPurchaseAmount();
    }
  }

  async getWinningNumbers() {
    const winningNumbers = await getUserInput(INPUT_MESSAGE.winningNumber);
    return winningNumbers.split(',').map((number) => Number(number.trim()));
  }

  async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await getUserInput(INPUT_MESSAGE.bonusNumber);
      validateBonusNumber(bonusNumber, winningNumbers);

      return Number(bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return await this.getBonusNumber(winningNumbers);
    }
  }
}

export default Input;
