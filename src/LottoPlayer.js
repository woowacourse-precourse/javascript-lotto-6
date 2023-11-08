import { Console } from '@woowacourse/mission-utils';
import messages from './constants/messages';
import Lotto from './Lotto';

class LottoPlayer {
  constructor() {
    this.amount = 0;
  }

  #validatePurchase(amount) {
    if (isNaN(amount)) Console.print(messages.error.invalidAmount);
  }

  #validateNumber(number) {
    number >= 1 && number <= 45;
    if (number >= 1 && number <= 45) {
      Console.print(messages.error.invalidNumber);
    }
  }

  async purchaseLotto() {
    const amount = await Console.readLineAsync(messages.purchase.request);
    this.#validatePurchase(amount);
    this.amount = amount;
    const ticketCount = amount / 1000;

    return ticketCount;
  }

  async enterWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(messages.number.winning);

    return winningNumbers;
  }

  async enterBonusNumber() {
    const bonusNumber = await Console.readLineAsync(messages.number.bonus);
    this.#validateNumber(bonusNumber);

    return bonusNumber;
  }
}

export default LottoPlayer;
