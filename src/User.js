import InputHandler from './InputHandler';
import messages from './constants/messages';
import { Console } from '@woowacourse/mission-utils';

class User {
  async purchaseLotto() {
    const amount = await InputHandler.inputPurchaseAmount();
    this.#validatePurchase(amount);

    const ticketCount = amount / 1000;
    return ticketCount;
  }

  async enterWinningNumbers() {
    const winningNumbers = await InputHandler.inputWinningNumbers();

    return winningNumbers;
  }

  async enterBonusNumber() {
    const bonusNumber = await InputHandler.inputBonusNumber();

    return bonusNumber;
  }

  #validatePurchase(amount) {
    if (isNaN(amount)) Console.print(messages.error.invalidAmount);
  }
}

export default User;
