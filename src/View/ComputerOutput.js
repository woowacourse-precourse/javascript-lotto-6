import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO_NUMBER, OUTPUT_MESSAGE, PRIZE } from '../Utils/constants.js';
class Output {

  static ticketPrint(purchaseAmount) {
    const numOfTickets = purchaseAmount / LOTTO_NUMBER.MIN_PURCHASE;
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
    const prizes = [PRIZE.NONE, PRIZE.RANK_ONE, PRIZE.RANK_TWO, PRIZE.RANK_THREE, PRIZE.RANK_TWO, PRIZE.RANK_ONE];
    let totalPrize = PRIZE.NONE;

    const printMatchingCount = (matchedCount, prizeIndex) => {
      const matchingCount = matchingCounts.filter(ticket => ticket.matchedCount === matchedCount).length;
      Console.print(`${matchedCount}개 일치 (${prizes[prizeIndex].toLocaleString()}원) - ${matchingCount}개`);
      totalPrize += prizes[prizeIndex] * matchingCount;
    };

    printMatchingCount(PRIZE.MATCHING_COUNT_THREE, PRIZE.MATCHING_COUNT_ONE);
    printMatchingCount(PRIZE.MATCHING_COUNT_FOUR, PRIZE.MATCHING_COUNT_TWO);
    printMatchingCount(PRIZE.MATCHING_COUNT_FIVE, PRIZE.MATCHING_COUNT_THREE);

    const matchingCount5WithBonus = matchingCounts.filter(ticket => ticket.matchedCount === PRIZE.MATCHING_COUNT_FIVE && ticket.hasBonusNumber).length;
    Console.print(`5개 일치, 보너스 볼 일치 (${prizes[4].toLocaleString()}원) - ${matchingCount5WithBonus}개`);
    totalPrize += prizes[PRIZE.MATCHING_COUNT_FOUR] * matchingCount5WithBonus;

    printMatchingCount(PRIZE.MATCHING_COUNT_SIX, PRIZE.MATCHING_COUNT_FIVE);

    return totalPrize;
  }

  static calculateEarnings(totalPrize, purchaseAmount) {
    const earnings = (totalPrize / +purchaseAmount) * PRIZE.EARNINGS_CONDITION;
    Console.print(`총 수익률은 ${earnings.toFixed(1)}%입니다.`);
  }


}

export default Output;