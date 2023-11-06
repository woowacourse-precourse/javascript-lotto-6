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
    const bonusNumber = await LottoGame.setBonusNumber([...winningNumbersArray.getNumbers()]);
    const results = LottoGame.calculateResult(
      bonusNumber,
      [...this.#tickets],
      [...winningNumbersArray.getNumbers()],
    );
    LottoGame.printResults(results);
    LottoGame.printEarningRate(ticketCount, results);
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
        Console.print(error.message);
      }
    }
  }

  static async setWinngNumberArray() {
    while (true) {
      try {
        const winningNumbers = await Query.getWinningNumber();
        const winningNumbersArray = new Lotto(
          LottoGame.winningNumberToWinningNumberArray(winningNumbers),
        );
        return winningNumbersArray;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async setBonusNumber(winningNumbersArray = []) {
    while (true) {
      try {
        const bonusNumber = await Query.getBonusNumber();
        const bonusNumberInt = this.validatebonusNumber(
          bonusNumber,
          winningNumbersArray,
        );
        return bonusNumberInt;
      } catch (error) {
        Console.print(error.message);
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

  static getRank(matchCount, hasBonus) {
    if (matchCount === 6) return 5;
    if (matchCount === 5) return hasBonus ? 4 : 3;
    if (matchCount === 4) return 2;
    if (matchCount === 3) return 1;
    return 0; // 당첨되지 않음
  }

  static calculateResult(bonusNumber = 0, tickets = [], winningNumbersArray = []) {
    return tickets.reduce(
      (matchCounts, ticket) => {
        const matchCount = ticket.getMatchCount(winningNumbersArray);
        const rank = LottoGame.getRank(matchCount, ticket.hasNumber(bonusNumber));
        const newMatchCounts = [...matchCounts];
        if (rank > 0) newMatchCounts[rank - 1] += 1;
        return newMatchCounts;
      },
      [0, 0, 0, 0, 0],
    );
  }

  static printResults(results) {
    const prizeMoney = ['5000', '50000', '1500000', '30000000', '2000000000'];
    const matchCount = [3, 4, 5, 5, 6];
    results.forEach((result, index) => {
      const bonusText = index === 3 ? ', 보너스 볼 일치' : '';
      Console.print(
        `${matchCount[index]}개 일치${bonusText} (${prizeMoney[index].replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ',',
        )}원) - ${result}개`,
      );
    });
  }

  static calculateEarningsRate(ticketCount, results) {
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    const totalEarnings = results.reduce(
      (sum, result, index) => sum + result * prizeMoney[index],
      0,
    );
    const earningsRate = (totalEarnings / (ticketCount * 1000)) * 100;
    return earningsRate.toFixed(1); // 소수점 둘째 자리에서 반올림
  }

  static printEarningRate(ticketCount = 0, results = []) {
    const earningRate = LottoGame.calculateEarningsRate(ticketCount, results);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default LottoGame;
