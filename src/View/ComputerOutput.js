import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
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

    const printMatchingCount = (matchedCount, prizeIndex) => {
      const matchingCount = matchingCounts.filter(ticket => ticket.matchedCount === matchedCount).length;
      Console.print(`${matchedCount}개 일치 (${prizes[prizeIndex].toLocaleString()}원) - ${matchingCount}개`);
      totalPrize += prizes[prizeIndex] * matchingCount;
    };

    printMatchingCount(3, 1);
    printMatchingCount(4, 2);
    printMatchingCount(5, 3);

    const matchingCount5WithBonus = matchingCounts.filter(ticket => ticket.matchedCount === 5 && ticket.hasBonusNumber).length;
    Console.print(`5개 일치, 보너스 볼 일치 (${prizes[4].toLocaleString()}원) - ${matchingCount5WithBonus}개`);
    totalPrize += prizes[4] * matchingCount5WithBonus;

    printMatchingCount(6, 5);

    return totalPrize;
  }

  static calculateEarnings(totalPrize, purchaseAmount) {
    const earnings = (totalPrize / +purchaseAmount) * 100;
    Console.print(`총 수익률은 ${earnings.toFixed(1)}%입니다.`);
  }


}

export default Output;