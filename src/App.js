import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Vendor from './Vendor.js';
import Interface from './Interface.js';
import { inputPrompts } from './constants.js';
import { validatePurchase, validateBonusNumber } from './utilities.js';

class App {
  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.vendor = new Vendor(purchaseAmount);
    const tickets = this.vendor.getTickets();

    Interface.printTickets(tickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const matches = this.vendor.findMatches(winningNumbers, bonusNumber);
    const profit = this.vendor.getProfit(matches);

    return Interface.printResults(matches, profit);
  }

  async getPurchaseAmount() {
    let input;

    do {
      try {
        input = await Console.readLineAsync(inputPrompts.PURCHASE);
        validatePurchase(input);
      } catch (error) {
        Console.print(error.message);
        input = null;
      }
    } while (!input);
    return Number(input);
  }

  async getWinningNumbers() {
    let input;
    let lotto;

    do {
      try {
        input = await Console.readLineAsync(inputPrompts.WINNING_NUMBERS);
        const numbers = input.split(',').map((number) => Number(number));
        lotto = new Lotto(numbers);
      } catch (error) {
        Console.print(error.message);
      }
    } while (!lotto);
    return lotto;
  }

  async getBonusNumber(winningNumbers) {
    let input;

    do {
      try {
        input = await Console.readLineAsync(inputPrompts.BONUS_NUMBER);
        validateBonusNumber(winningNumbers, input);
      } catch (error) {
        Console.print(error.message);
        input = null;
      }
    } while (!input);
    return Number(input);
  }
}

export default App;
