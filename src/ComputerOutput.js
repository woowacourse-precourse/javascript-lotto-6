import { Random, Console } from '@woowacourse/mission-utils';
import Input from './UserInput.js';
import Lotto from './Lotto.js';

class Output {
  static ticketPrint(purchaseAmount) {
    const numOfTickets = purchaseAmount / 1000;
    const lottoTickets = [];

    for (let i = 0; i < numOfTickets; i++) {
      const numbers = Lotto.createRandomNumbers().sort((a, b) => a - b);
      lottoTickets.push(numbers);
    }

    Console.print(`\n${numOfTickets}개를 구매했습니다.`);
    lottoTickets.forEach(ticket => {
      Console.print(ticket);
    });
    return lottoTickets;
  }

  static compareTickets(lottoTickets, winningNumbers, bonusNumber) {
    const matchingCounts = lottoTickets.map(ticket => {
      const matchedCount = ticket.filter(number => winningNumbers.includes(number)).length;
      const hasBonusNumber = ticket.includes(bonusNumber);
      return { matchedCount, hasBonusNumber };
    });

    return matchingCounts;
  }

  static calculatePrizes(matchingCounts) {
    const prizes = [0, 5000, 50000, 1500000, 30000000, 2000000000];
    let totalPrize = 0;

    Console.print('\n당첨 통계');
    Console.print('---');

    const countTickets = (matchedCount, hasBonusNumber) => {
      return matchingCounts.filter(ticket => ticket.matchedCount === matchedCount && ticket.hasBonusNumber === hasBonusNumber).length;
    };

    let matchingCount = countTickets(3, false);
    Console.print(`3개 일치 (5,000원) - ${matchingCount}개`);
    totalPrize += prizes[1] * matchingCount;

    matchingCount = countTickets(3, true);
    Console.print(`3개 일치 (5,000원) - ${matchingCount}개`);
    totalPrize += prizes[1] * matchingCount;

    matchingCount = countTickets(4, false);
    Console.print(`4개 일치 (50,000원) - ${matchingCount}개`);
    totalPrize += prizes[2] * matchingCount;

    matchingCount = countTickets(4, true);
    Console.print(`4개 일치 (50,000원) - ${matchingCount}개`);
    totalPrize += prizes[2] * matchingCount;

    matchingCount = countTickets(5, false);
    Console.print(`5개 일치 (1,500,000원) - ${matchingCount}개`);
    totalPrize += prizes[3] * matchingCount;

    matchingCount = countTickets(5, true);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchingCount}개`);
    totalPrize += prizes[4] * matchingCount;

    matchingCount = countTickets(6, false);
    Console.print(`6개 일치 (2,000,000,000원) - ${matchingCount}개`);
    totalPrize += prizes[5] * matchingCount;

    Console.print(`총 당첨금액: ${totalPrize.toLocaleString()}원`);
    return totalPrize;
  }

  static calculateEarnings(totalPrize, purchaseAmount) {
    const earnings = totalPrize - purchaseAmount;
    const profitRatio = ((earnings / purchaseAmount) * 100).toFixed(2);
    Console.print(`총 수익률은 ${profitRatio}%입니다.`);
  }


}

export default Output;