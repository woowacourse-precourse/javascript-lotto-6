import Lotto from './Lotto';
import Query from './View/Query';
import Print from './View/Print';
import { Console, Random } from '@woowacourse/mission-utils';
class LottoGame {
  #tickets;

  async start() {
    const ticketCount = await LottoGame.setTicketCount();
    this.#purchaseLottos(ticketCount);
    Print.printTickets([...this.#tickets]);
    const winningNumbersArray = await LottoGame.setWinngNumberArray();
    const bonusNumber = await LottoGame.setBonusNumber([
      ...winningNumbersArray.getNumbers(),
    ]);
  }

  static validatePurchaseAmount(purchaseAmount = '0') {
    if (
      Number.isNaN(Number(purchaseAmount)) ||
      Number(purchaseAmount) % 1000 !== 0 ||
      Number(purchaseAmount) < 1000
    ) {
      throw new Error('[ERROR] 구입 금액이 잘못 입력되었습니다.');
    }
    return Number(purchaseAmount) / 1000;
  }

  #purchaseLottos(ticketCount = 0) {
    this.#tickets = [];
    for (let i = 0; i < ticketCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#tickets.push(new Lotto(numbers));
    }
  }

  static async setTicketCount() {
    while (true) {
      try {
        const purchaseAmount = await Query.getPurchaseAmount();
        const ticketCount = LottoGame.validatePurchaseAmount(purchaseAmount);
        return ticketCount;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  static async setWinngNumberArray() {
    while (true) {
      try {
        const winningNumbers = await Query.getWinningNumber();
        const winningNumbersArray = new Lotto(
          LottoGame.winningNumberToWinningNumberArray(winningNumbers)
        );
        return winningNumbersArray;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  static async setBonusNumber(winningNumbersArray = []) {
    while (true) {
      try {
        const bonusNumber = await Query.getBonusNumber();
        const bonusNumberInt = this.validatebonusNumber(
          bonusNumber,
          winningNumbersArray
        );
        return bonusNumberInt;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  static winningNumberToWinningNumberArray(winningNumbers = '') {
    return winningNumbers.split(',').map((winningNumber) => {
      const trimWinningNumber = winningNumber.trim();
      return Number(trimWinningNumber);
    });
  }

  static validatebonusNumber(bonusNumber = '0', winningNumbersArray = []) {
    const bonusNumberInt = Number(bonusNumber);
    if (
      winningNumbersArray.includes(bonusNumberInt) ||
      !Number.isInteger(bonusNumberInt) ||
      bonusNumberInt < 1 ||
      bonusNumberInt > 45
    ) {
      throw new Error('[ERROR] 보너스 숫자가 잘못되었습니다.');
    }
    return bonusNumberInt;
  }
}

export default LottoGame;
