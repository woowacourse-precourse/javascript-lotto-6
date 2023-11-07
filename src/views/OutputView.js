import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/constants.js';

const OutputView = {
  printTickets(tickets) {
    Console.print(OUTPUT_MESSAGE.purchaseCount(tickets));
    tickets.forEach(numbers => {
      const ticket = numbers.sort((a, b) => a - b);
      Console.print(OUTPUT_MESSAGE.tickets(ticket));
    });
  },

  printPrizeTitle() {
    Console.print(OUTPUT_MESSAGE.resultTitle);
  },

  printPrizeResult(result) {
    result.forEach((matchCount, prize) => {
      Console.print(OUTPUT_MESSAGE.prizeResult(prize, matchCount));
    });
  },

  printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGE.profitRate(profitRate));
  },
};

export default OutputView;
