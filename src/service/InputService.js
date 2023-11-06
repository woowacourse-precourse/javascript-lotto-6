import validation from '../util/validation/index.js';
import { Console } from '@woowacourse/mission-utils';
class InputService {
  constructor() {}

  static async setPurchaseMoney(query) {
    while (true) {
      try {
        const purchaseMoney = await Console.readLineAsync(query);
        validation.purchaseMoneyInput(purchaseMoney);
        return purchaseMoney;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async setWinningNumber(query) {
    while (true) {
      try {
        const winningNumber = await Console.readLineAsync(query);
        validation.winningNumberInput(winningNumber);
        return winningNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  static async setBonusNumber(query, winningNumber) {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(query);
        validation.bonusNumberInput(bonusNumber, winningNumber);
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default InputService;
