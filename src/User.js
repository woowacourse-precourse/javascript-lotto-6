import InputHandler from './InputHandler';
import messages from './constants/messages';
import { Console } from '@woowacourse/mission-utils';

class User {
  async purchaseLotto() {
    const amount = await Console.readLineAsync(messages.purchase.request);
    this.#validatePurchase(amount);

    const ticketCount = amount / 1000;
    return ticketCount;
  }

  async enterWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(messages.number.winning);

    return winningNumbers;
  }

  async enterBonusNumber() {
    const bonusNumber = await Console.readLineAsync(messages.number.bonus);

    return bonusNumber;
  }

  #validatePurchase(amount) {
    if (isNaN(amount)) Console.print(messages.error.invalidAmount);
  }
}

export default User;
