import Lotto from './Lotto';
import Query from './View/Query';
import Print from './View/Print';
import { Console, Random } from '@woowacourse/mission-utils';
import ERROR from './Message/Error';
import WINNGPRICE from './Message/WinningPrice';
import NUMBER from './Message/Number';
import STRING from './Message/Strig';
class LottoGame {
  async start() {
    const ticketCount = await LottoGame.getTicketCount();
    const tickets = LottoGame.purchaseLottos(ticketCount);
    Print.printTickets([...tickets]);
    const winningNumbersArray = await LottoGame.getWinngNumberArray();
    const bonusNumber = await LottoGame.getBonusNumber([...winningNumbersArray.getNumbers()]);
    const results = LottoGame.calculateResult(
      bonusNumber,
      [...tickets],
      [...winningNumbersArray.getNumbers()],
    );
    Print.printResults([...results]);
    const earningRate = LottoGame.calculateEarningsRate(ticketCount, [...results,]);
    Print.printEarningRate(earningRate);
  }

  static validatePurchaseAmount(purchaseAmount = NUMBER.defaultNumber) {
    if (
      Number.isNaN(Number(purchaseAmount)) ||
      Number(purchaseAmount) % NUMBER.priceUnit !== NUMBER.defaultNumber ||
      Number(purchaseAmount) < NUMBER.priceUnit
    ) {
      throw new Error(ERROR.purchaseAmount);
    }
    return Number(purchaseAmount) / NUMBER.priceUnit;
  }

  static purchaseLottos(ticketCount = NUMBER.defaultNumber) {
    const tickets = [];
    for (let i = NUMBER.defaultNumber; i < ticketCount; i += NUMBER.countPlus) {
      const numbers = Random.pickUniqueNumbersInRange(
        NUMBER.lottoStartNumber,
        NUMBER.lottoEndNumber,
        NUMBER.lottoLength,
      );
      tickets.push(new Lotto(numbers));
    }
    return [...tickets];
  }

  static async getTicketCount() {
    while (STRING.loopFlag) {
      try {
        const purchaseAmount = await Query.getPurchaseAmount();
        const ticketCount = LottoGame.validatePurchaseAmount(purchaseAmount);
        return ticketCount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getWinngNumberArray() {
    while (STRING.loopFlag) {
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

  static async getBonusNumber(winningNumbersArray = STRING.emptyArray) {
    while (STRING.loopFlag) {
      try {
        const bonusNumber = await Query.getBonusNumber();
        const bonusNumberInt = LottoGame.validateBonusNumber(
          bonusNumber,
          winningNumbersArray,
        );
        return bonusNumberInt;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static winningNumberToWinningNumberArray(winningNumbers = STRING.empty) {
    return winningNumbers.split(STRING.separator).map((winningNumber) => {
      const trimWinningNumber = winningNumber.trim();
      return Number(trimWinningNumber);
    });
  }

  static validateBonusNumber(bonusNumber = NUMBER.defaultNumber, winningNumbersArray = []) {
    const bonusNumberInt = Number(bonusNumber);
    if (
      winningNumbersArray.includes(bonusNumberInt) ||
      !Number.isInteger(bonusNumberInt) ||
      bonusNumberInt < NUMBER.lottoStartNumber ||
      bonusNumberInt > NUMBER.lottoEndNumber
    ) {
      throw new Error(ERROR.bonusNumber);
    }
    return bonusNumberInt;
  }

  static getRank(matchCount, hasBonus) {
    if (matchCount === NUMBER.matchSix) return NUMBER.firstPlace;
    if (matchCount === NUMBER.matchFive)
      return hasBonus ? NUMBER.secondPlace : NUMBER.thirdPlace;
    if (matchCount === NUMBER.matchFour) return NUMBER.fourthPlace;
    if (matchCount === NUMBER.matchThree) return NUMBER.fifthPlace;
    return NUMBER.defaultNumber;
  }

  static calculateResult(bonusNumber = NUMBER.defaultNumber, tickets = [], winningNumbersArray = []) {
    return tickets.reduce(
      (matchCounts, ticket) => {
        const matchCount = ticket.getMatchCount(winningNumbersArray);
        const rank = LottoGame.getRank(matchCount, ticket.hasNumber(bonusNumber),);
        const newMatchCounts = [...matchCounts];
        if (rank > NUMBER.defaultNumber)
          newMatchCounts[rank - NUMBER.countPlus] += NUMBER.countPlus;
        return newMatchCounts;
      },
      [...NUMBER.defaultArray],
    );
  }

  static calculateEarningsRate(ticketCount = NUMBER.defaultNumber, results = []) {
    const prizeMoney = [...WINNGPRICE];
    const totalEarnings = results.reduce(
      (sum, result, index) => sum + result * prizeMoney[index],
      0,
    );
    const earningsRate =
      (totalEarnings / (ticketCount * NUMBER.priceUnit)) * NUMBER.percent;
    return earningsRate.toFixed(NUMBER.roundPosition);
  }
}

export default LottoGame;
